import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Film } from "~/Types/movieTypes";

type FilmCardProps = {
  film: Film;
  single: boolean;
};

const FilmCard: React.FC<FilmCardProps> = ({ film, single }) => {
  return (
    <Link
      href={`movies/${film.film_id}`}
      className={single ? "w-min" : "flex flex-col bg-white"}
    >
      <Image
        src={film.images.poster["1"].medium.film_image}
        alt="Movie Poster"
        height={single ? film.images.poster["1"].medium.height : 250}
        width={single ? film.images.poster["1"].medium.width : 100}
        style={{ objectFit: "contain" }}
        className={single ? "m-0 max-w-none" : "w-full"}
      />
      <div className="h-[55px] p-2">
        <span className="font-seri m-auto block h-[2em] overflow-hidden text-ellipsis whitespace-normal text-sm/6 font-bold text-slate-700 no-underline hover:text-black hover:underline hover:decoration-cyan-500 hover:decoration-2">
          {film.film_name}
        </span>
      </div>
    </Link>
  );
};
export default FilmCard;
