import React from "react";
import MovieCard from "./MovieCard";

type TheaterCardProps = {
  cinema_name: string;
  movies: {
    times: string[];
    film_name: string;
    cinema_name: string;
    show_type: string;
  }[];
};

const TheaterCard: React.FC<TheaterCardProps> = ({ cinema_name, movies }) => {
  return (
    <>
      <div className="w-100% my-3 flex h-14 flex-col justify-around bg-[#262626] p-2">
        <p className="text-xl font-bold text-white">{cinema_name}</p>
        {/* <p className="text-sm text-[#929292]">{theater.Address}</p> */}
      </div>
      {movies &&
        movies.map((movie, idx) => <MovieCard movie={movie} key={idx} />)}
    </>
  );
};
export default TheaterCard;
