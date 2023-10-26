import Image from "next/image";
import React from "react";
import { Movie } from "~/Types/theaterType";
import getImages from "~/utils/defaultImages";
import TimeButton from "./TimeButton";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard: React.FC<MovieCardProps> = ({
  movie: { times, film_name, show_type },
}) => {
  const moviesImagesObj = getImages();
  const foundMovieImage = moviesImagesObj.find(
    (movie) => movie.movieName === film_name,
  );

  const image = foundMovieImage?.image;
  return (
    <div className="flex bg-white mb-2">
      <div className="flex flex-1">
        {
          <Image
            src={image ? image : "/defaultmovie.jpg"}
            alt={`Photo for ${film_name}`}
            height={205}
            width={134}
            className="max-h-[213px] max-w-none"
          />
        }
        <h1>{film_name}</h1>
      </div>
      <div className="flex-[2] flex-wrap">
        <p>{show_type}</p>
        {times.map((time: string, idx: number) => (
          <TimeButton time={time} key={idx} />
        ))}
      </div>
    </div>
  );
};
export default MovieCard;
