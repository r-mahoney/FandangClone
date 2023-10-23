import Image from "next/image";
import React from "react";
import { Movie } from "~/Types/theaterType";
import getImages from "~/utils/defaultImages";
import TimeButton from "./TimeButton";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const moviesImagesObj = getImages();
  const movieName = Object.keys(movie)[0];
  const foundMovieImage = moviesImagesObj.find(
    (movie) => movie.movieName === movieName,
  );

  const image = foundMovieImage?.image;
  return (
    <div className="flex bg-white">
      <div className="flex flex-1">
        {
          <Image
            src={image ? image : "/defaultmovie.jpg"}
            alt={`Photo for ${movieName}`}
            height={205}
            width={134}
            className="max-w-none max-h-[213px]"
          />
        }
        <h1>{movieName}</h1>
      </div>
      <div className="flex-[2] flex-wrap">
        {movie[movieName as string] &&
          Object.keys(movie[movieName as string]!).map((type: string, idx: number) => (
            <div key={idx}>
              <p>{type}</p>
              {/* @ts-ignore */}
              {movie[movieName][type].map((time: string, idx: number) => (
                <TimeButton time={time} key={idx}/>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};
export default MovieCard;
