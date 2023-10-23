import React from "react";
import { Theater } from "~/Types/theaterType";
import MovieCard from "./MovieCard";

type TheaterCardProps = {
  theaters: Theater[];
};

const TheaterCard: React.FC<TheaterCardProps> = ({ theaters }) => {
  return (
    <>
      {theaters.map((theater) => (
        <div key={theater["Theater Name"]}>
          <div className="w-100% my-3 flex h-14 flex-col justify-around bg-[#262626] p-2">
            <p
              key={theater["Theater Name"]}
              className="text-xl font-bold text-white"
            >
              {theater["Theater Name"]}
            </p>
            <p className="text-sm text-[#929292]">{theater.Address}</p>
          </div>
          {theater.Movies.map((movie, idx) => (
            <MovieCard movie={movie} key={idx}/>
          ))}
        </div>
      ))}
    </>
  );
};
export default TheaterCard;
