import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const theatersObj = {}

async function seedMovies() {
  const dates = Object.keys(theatersObj);
  let timesData: any[] = [];

  dates.map((date) => {
    // @ts-ignore
    const theaters = theatersObj[date];
    return theaters.map((theater: any) => {
      const movies = theater.Movies;
      return movies.map(async (movie: any) => {
        timesData.push({
          film_name: movie.film_name,
          cinema_name: theater["Theater Name"],
          show_type: movie.show_type,
          date,
          times: movie.times,
        });
      });
    });
  });
  await prisma.times.createMany({
    data: timesData
  })
}

seedMovies();
