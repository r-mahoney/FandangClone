import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

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
      if (content && rating) {
        const comment = await ctx.db.comment.create({
          data: {
            content,
            movieName,
            rating,
            //@ts-ignore
            userId: ctx.session.user.id,
            userName: ctx.session?.user.name!,
          },
        });

        return comment;
      } else {
        if (!content) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Review must include text.",
            // optional: pass the original error to retain stack trace
          });
        }
        if (!rating) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Review must include a rating from 1-5.",
            // optional: pass the original error to retain stack trace
          });
        }
      }
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
  getAverageRating: publicProcedure
    .input(
      z.object({
        movieName: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const rating = await ctx.db.comment.aggregate({
        _avg: {
          rating: true,
        },
        where: z
          .object({
            movieName: z.string(),
          })
          .parse(input),
      });

      return rating._avg.rating;
    }),
  deleteComment: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      await ctx.db.comment.delete({
        where: z
          .object({
            id: z.string(),
          })
          .parse(input),
      });
    }),
});
