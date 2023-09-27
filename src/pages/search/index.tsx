import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import FilmCard from "~/Components/FilmCard";
import { Film } from "~/Types/movieTypes";
import getOptions from "~/utils/headers";

type indexProps = {
  geolocation: string;
};

const index: React.FC<indexProps> = ({ geolocation }) => {
  const params = useSearchParams();
  const [films, setFilms] = useState<Film[]>([]);
  const searchparams = new URLSearchParams(params);
  const search = searchparams.get("movie");
  const options = getOptions();

  useEffect(() => {
    if (!search) return;
    (async function () {
      try {
        const response = await fetch(
          `https://api-gate2.movieglu.com/filmLiveSearch/?query=${search
            .split(" ")
            .join("+")}&n=5`,
          options,
        );
        const data = await response.json();
        setFilms(data.films);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [search]);

  return (
    <div className="body ">
      {search &&
        films &&
        films.map((film) => (
          <div key={film.film_id}>
            <FilmCard film={film} single={true} />
          </div>
        ))}
    </div>
  );
};
export default index;
