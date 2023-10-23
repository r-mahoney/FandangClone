import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const moviesRouter = createTRPCRouter({
    getMovies: publicProcedure
    .query(async({ctx}) => {
        return await ctx.db.movie.findMany()
    }),
    findMovie: publicProcedure
    .input(
        z.object({
            film_id: z.number()
        })
    )
    .query(async({input, ctx}) => {
        return await ctx.db.movie.findFirst({
            where: z.object({
                film_id: z.number()
            })
            .parse(input)
        })
    })
})
