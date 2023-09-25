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
          //@ts-ignore
          data: { content, movieName, rating, userId: ctx.session.user.id, userName: ctx.session?.user.name },
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
});
