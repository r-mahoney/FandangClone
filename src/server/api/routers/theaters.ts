import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const theatersRouter = createTRPCRouter({
  getTheaters: publicProcedure
    .input(
      z.object({
        date: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const theaters = await ctx.db.times.findMany({
        where: z.object({ date: z.string() }).parse(input),
        distinct: ["cinema_name"],
        select: {
          cinema_name: true,
        },
      });

      return theaters.map((theater) => {
        return theater.cinema_name;
      });
    }),
  findMoviesForTheater: publicProcedure
    .input(
      z.object({
        date: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      return await ctx.db.times.findMany({
        where: z
          .object({ date: z.string() })
          .parse(input),
        select: {
          cinema_name: true,
          film_name: true,
          times: true,
          show_type: true,
        },
      });
    }),
});
