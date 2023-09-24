import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const commentsRouter = createTRPCRouter({
  createComment: publicProcedure
    .input(
      z.object({
        content: z.string(),
        movieName: z.string(),
        rating: z.number(),
      }),
    )
    .mutation(async ({ input: { content, movieName, rating }, ctx }) => {
      const comment = await ctx.db.comment.create({
        //@ts-ignore
        data: { content, movieName, rating, userId: ctx.session.user.id },
      });

      return comment;
    }),
  getMovieComments: publicProcedure
    .input(
      z.object({
        movieName: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      return await ctx.db.comment.findMany({
        where: z
          .object({
            movieName: z.string(),
          })
          .parse(input),
      });
    }),
});
