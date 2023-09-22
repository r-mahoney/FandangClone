import React from "react";
import { Film } from "~/Types/movieTypes";

type TrailerProps = {
  film: Film;
};

const Trailer: React.FC<TrailerProps> = ({ film }) => {
  return (
    <video controls width="600" className="hidden px-2 lg:block">
      <source src={film.film_trailer} type="video/mp4" />
    </video>
  );
};
export default Trailer;
