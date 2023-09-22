import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import FilmCard from "~/Components/FilmCard";
import { Film } from "~/Types/movieTypes";

type indexProps = {};

const index: React.FC<indexProps> = () => {
  const params = useSearchParams();
  const [films, setFilms] = useState<Film[]>([]);
  const searchparams = new URLSearchParams(params);
  const search = searchparams.get("movie");
  const options = {
    method: "GET",
    headers: {
      client: "MOVI_189",
      "x-api-key": "xTfflwuIm54fE6tKkbwPNaIQt1RCVI4x9vfSxcDf",
      authorization: "Basic TU9WSV8xODlfWFg6a25TN1R5TUdBeTVG",
      territory: "XX",
      "api-version": "v200",
      geolocation: "-22.0;14.0",
      "device-datetime": new Date().toISOString(),
    },
  };

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
            <FilmCard film={film} single={true}/>
          </div>
        ))}
    </div>
  );
};
export default index;
