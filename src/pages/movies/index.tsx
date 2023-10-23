import React, { useContext } from "react";
import FilmCard from "~/Components/FilmCard";
import MoviesContext from "~/Contexts/MovieContext";
import { api } from "~/utils/api";

type indexProps = {};

const index: React.FC<indexProps> = () => {
  // const { movies } = useContext(MoviesContext);
  const movies = api.movie.getMovies.useQuery().data
  return (
    <>
      <h2 className="heading-style-stub mt-6 text-3xl">Now Playing</h2>
      <div className="grid w-3/4 grid-cols-4 gap-4 pb-5 pt-5 2xl:w-1/2">
        {movies &&
          movies.map((film) => (
            <FilmCard film={film} key={film.film_id} single={false} />
          ))}
      </div>
    </>
  );
};

export default index;
