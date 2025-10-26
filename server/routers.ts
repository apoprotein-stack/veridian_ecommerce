import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { getAllProducts, getProductById, getUserCartItems, getOrderItems, getUserOrders } from "./db";
import { getDb } from "./db";
import { cartItems, orderItems, orders } from "../drizzle/schema";
import { and, eq } from "drizzle-orm";

export const appRouter = router({
  system: systemRouter,

  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  products: router({
    list: publicProcedure.query(() => getAllProducts()),
    getById: publicProcedure.input(z.object({ id: z.number() })).query(({ input }) => getProductById(input.id)),
  }),

  cart: router({
    getItems: protectedProcedure.query(({ ctx }) => getUserCartItems(ctx.user.id)),
    addItem: protectedProcedure
      .input(z.object({ productId: z.number(), quantity: z.number().min(1) }))
      .mutation(async ({ ctx, input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        const existing = await db
          .select()
          .from(cartItems)
          .where(and(
            eq(cartItems.userId, ctx.user.id),
            eq(cartItems.productId, input.productId)
          ))
          .limit(1);
        
        if (existing.length > 0) {
          await db
            .update(cartItems)
            .set({ quantity: existing[0].quantity + input.quantity })
            .where(eq(cartItems.id, existing[0].id));
        } else {
          await db.insert(cartItems).values({
            userId: ctx.user.id,
            productId: input.productId,
            quantity: input.quantity,
          });
        }
        return { success: true };
      }),
    removeItem: protectedProcedure
      .input(z.object({ cartItemId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        await db.delete(cartItems).where(eq(cartItems.id, input.cartItemId));
        return { success: true };
      }),
    updateQuantity: protectedProcedure
      .input(z.object({ cartItemId: z.number(), quantity: z.number().min(0) }))
      .mutation(async ({ ctx, input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        if (input.quantity === 0) {
          await db.delete(cartItems).where(eq(cartItems.id, input.cartItemId));
        } else {
          await db.update(cartItems).set({ quantity: input.quantity }).where(eq(cartItems.id, input.cartItemId));
        }
        return { success: true };
      }),
  }),

  orders: router({
    list: protectedProcedure.query(({ ctx }) => getUserOrders(ctx.user.id)),
    getItems: protectedProcedure
      .input(z.object({ orderId: z.number() }))
      .query(({ input }) => getOrderItems(input.orderId)),
    create: protectedProcedure
      .input(z.object({
        shippingAddress: z.string(),
        shippingMethod: z.string(),
      }))
      .mutation(async ({ ctx, input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        // Get cart items
        const userCartItems = await getUserCartItems(ctx.user.id);
        if (userCartItems.length === 0) throw new Error("Cart is empty");
        
        // Calculate total price
        let totalPrice = "0";
        for (const item of userCartItems) {
          const product = await getProductById(item.productId);
          if (product) {
            totalPrice = String(parseFloat(totalPrice) + parseFloat(product.price) * item.quantity);
          }
        }
        
        // Create order
        const result = await db.insert(orders).values({
          userId: ctx.user.id,
          totalPrice: totalPrice,
          shippingAddress: input.shippingAddress,
          shippingMethod: input.shippingMethod,
        });
        
        const orderId = (result as any).insertId || 0;
        
        // Create order items
        for (const item of userCartItems) {
          const product = await getProductById(item.productId);
          if (product) {
            await db.insert(orderItems).values({
              orderId: Number(orderId),
              productId: item.productId,
              quantity: item.quantity,
              price: product.price,
            });
          }
        }
        
        // Clear cart
        await db.delete(cartItems).where(eq(cartItems.userId, ctx.user.id));
        
        return { orderId: Number(orderId), success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;

