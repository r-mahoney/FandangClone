import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import FilmCard from "~/Components/FilmCard";
import { Film } from "~/Types/movieTypes";
import getOptions from "~/utils/headers";
import { api } from "~/utils/api";
// import getDefaultMovies from "~/utils/defaultMovies";

type indexProps = {
  geolocation: string;
};

const index: React.FC<indexProps> = ({ geolocation }) => {
  const params = useSearchParams();
  const [films, setFilms] = useState<Film[]>([]);
  const searchparams = new URLSearchParams(params);
  const search = searchparams.get("movie");
  const movies = api.movie.getMovies.useQuery().data;

  useEffect(() => {
    if (!search) return;
    if (!movies) return;

    const searchResults = movies!.filter(
      (movie) => movie.film_name?.toLowerCase().match(new RegExp(search)),
    );
    setFilms(searchResults as []);
  }, [search, movies]);

  return (
    <div className="body">
      <div className="flex flex-wrap p-4">
        {search &&
          films &&
          films.map((film) => (
            <FilmCard film={film} single={true} key={film.film_id} />
          ))}
      </div>
    </div>
  );
};
export default index;
