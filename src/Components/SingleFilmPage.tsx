import React, { useEffect } from "react";
import { Film } from "~/Types/movieTypes";
import Image from "next/image";
import Trailer from "./Trailer";
import { api } from "~/utils/api";

type SingleFilmPageProps = {
  film: Film;
};

const SingleFilmPage: React.FC<SingleFilmPageProps> = ({ film }) => {
  const avgRatingCall = api.comment.getAverageRating.useQuery({
    movieName: film.film_name,
  });
  const comments = api.comment.getMovieComments.useQuery({
    movieName: film.film_name,
  });
  const avgRating = avgRatingCall.data;
  useEffect(() => {
    avgRatingCall.refetch();
  }, [comments.data?.length]);

  return (
    <>
      <section className="rounded-lg border border-solid border-gray-300 p-4">
        <div className="flex justify-between">
          <div>
            <Image
              src={film.images.poster["1"].medium.film_image}
              alt="Movie Poster"
              height={film.images.poster["1"].medium.height}
              width={film.images.poster["1"].medium.width}
              priority
              className="m-0 max-w-none rounded-md border border-solid border-gray-300"
            />
          </div>
          <div>
            <Trailer film={film} />
          </div>
        </div>
        <div className="flex justify-between">
          <h1 className="text-lg font-bold uppercase">{film.film_name}</h1>
          <p>Community Rating: {avgRating?.toFixed(1) || "No Ratings Yet"}</p>
        </div>
        <p>{film.synopsis_long}</p>
      </section>
    </>
  );
};
export default SingleFilmPage;
