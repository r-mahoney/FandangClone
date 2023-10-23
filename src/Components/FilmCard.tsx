import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Film } from "~/Types/movieTypes";
import { today } from "~/utils/dates";

type FilmCardProps = {
  film: Film;
  single: boolean;
};

const FilmCard: React.FC<FilmCardProps> = ({ film, single }) => {
  return (
    <Link
      href={`movies/${film.film_id}?date=${today()}`}
      className={single ? "w-min mr-3" : "flex flex-col bg-white w-min"}
    >
      <Image
        src={film.film_image ? film.film_image : '/defaultmovie.jpg'}
        alt="Movie Poster"
        height={single && film.film_image ? film.film_image_height : 308}
        width={single && film.film_image ? film.film_image_width : 200}
        style={{ objectFit: "contain" }}
        className={single ? "m-0 max-w-none h-[306px]" : "max-w-none h-auto"}
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
