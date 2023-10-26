import { commentsRouter } from "~/server/api/routers/comment";
import { moviesRouter } from "~/server/api/routers/movies";
import { createTRPCRouter } from "~/server/api/trpc";
import { theatersRouter } from "./routers/theaters";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  comment: commentsRouter,
  movie: moviesRouter,
  theater: theatersRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
