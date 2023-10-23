import { PrismaClient } from "@prisma/client";
import { Film } from "~/Types/movieTypes";

const prisma = new PrismaClient();

const movies: Film[] = [
   {
      film_name: "Elemental (2023)",
      film_id: 230347,
      film_length: "1 hr 43 min",
      genre: "Animated",
      release_date: "Friday, Jun 16, 2023",
      age_rating: {
        rating: "PG",
        age_rating_image:
          "https://assets.movieglu.com/age_rating_logos/us/pg.png",
        age_advisory: "Contains moderate violence and mild language",
      },
      synopsis_long:
        "Disney and Pixar’s “Elemental,” an all-new, original feature film set in Element City, where fire-, water-, land- and air-residents live together. The story introduces Ember, a tough, quick-witted and fiery young woman, whose friendship with a fun, sappy, go-with-the-flow guy named Wade challenges her beliefs about the world they live in. Directed by Peter Sohn, produced by Denise Ream, and featuring the voices of Leah Lewis and Mamoudou Athie as Ember and Wade, respectively, “Elemental” releases on June 16, 2023. ",
      images: {
        poster: {
          "1": {
            image_orientation: "portrait",
            region: "UK",
            medium: {
              film_image:
                "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/230347/STANDARD_ELM_Payoff_Train_1s_v90_Mech7.jpg",
              width: 200,
              height: 308,
            },
          },
        },
      },
    }
  ];

function seedMovies() {
  Promise.all(
    movies.map((movie) =>
      prisma.movie.create({
        data: {
          film_name: movie.film_name,
          film_id: movie.film_id,
          film_length: movie.film_length,
          genre: movie.genre,
          release_date: movie.release_date,
          age_rating: movie.age_rating.rating,
          age_rating_image: movie.age_rating.age_rating_image,
          age_advisory: movie.age_rating.age_advisory,
          synopsis_long: movie.synopsis_long,
          film_image: movie.images.poster["1"].medium.film_image,
          film_image_height: movie.images.poster["1"].medium.height,
          film_image_width: movie.images.poster["1"].medium.width,
        },
      }),
    ),
  )
    .then(() => console.info("[SEED] Succussfully create coffee records"))
    .catch((e) => console.error("[SEED] Failed to create coffee records", e));
}

seedMovies();
