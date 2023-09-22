import React from "react";
import { Film } from "~/Types/movieTypes";
import Image from "next/image";
import Trailer from "./Trailer";

type SingleFilmPageProps = {
  film: Film;
};

const SingleFilmPage: React.FC<SingleFilmPageProps> = ({ film }) => {
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
        <h1 className="text-lg font-bold uppercase">{film.film_name}</h1>
        <p>{film.synopsis_long}</p>
      </section>
    </>
  );
};
export default SingleFilmPage;
