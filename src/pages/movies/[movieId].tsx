import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import SingleFilmPage from "~/Components/SingleFilmPage";
import FilmTimes from "~/Components/FilmTimes";
import MoviesContext from "~/Contexts/MovieContext";
import { Film } from "~/Types/movieTypes";
import getDefaultCinemaTimes from "~/utils/defaultCinemas";
import { today, getNextSeven } from "~/utils/dates";
import DateButton from "~/Components/DateButton";
import { MovieDate } from "~/Types/dateType";

const movieDetails = () => {
  const router = useRouter();
  const movieId = router.query.movieId;
  const { movies } = useContext(MoviesContext);
  const data = movies.filter((movie) => movie.film_id == movieId)[0];
  const [date, setDate] = useState<string>(today());
  const movieDates = getNextSeven(today());
  const [cinemas, setCinemas] = useState<any[]>([]);
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
    if (!router.isReady) return;
    if (!data) return;
    (async function () {
      const response = await getCinemaTimes(options, movieId as string, data);
      setCinemas(response);
    })();
  }, [router.isReady, movieId, data]);

  function changeDate(e: any, date: MovieDate) {
    e.preventDefault();
    setDate(date.dateString!)
  }
  return (
    <div className="body">
      <div className="flex px-5">
        <div className="flex-[3_3_0%] py-5">
          {data && <SingleFilmPage film={data} />}
          <div className="flex mt-3">
            {movieDates.map((date, index) => (
              <DateButton
                date={date}
                onClick={(e) => {
                  changeDate(e, date);
                  document.querySelectorAll(".movieTimes")?.forEach(node => {
                    node.classList.remove("active-movie-date")
                  }) 
                  e.currentTarget.classList.add("active-movie-date")
                }}
                key={index}
              />
            ))}
          </div>
          {cinemas.map((cinema, idx) => (
            <section
              className={`my-4 rounded-lg border border-solid border-gray-300 p-4 ${
                idx === cinemas.length - 1 ? "mb-0" : null
              }`}
              key={cinema.cinema_id}
            >
              <FilmTimes cinema={cinema} />
            </section>
          ))}
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export async function getCinemaTimes(
  options: object,
  movieId: string,
  film: Film,
) {
  try {
    // const response = await fetch(
    //   `https://api-gate2.movieglu.com/filmShowTimes/?film_id=${movieId}&date=2023-09-21&n=10`,
    //   options,
    // );
    // const data = await response.json();
    // return data.cinemas;

    //CAN MAYBE DO ANOTHER API CALL FOR FILM DETAILS TO GET RATINGS/FILM DURATION/GENRE
    //WOULD BE GOOD IF I EVER PAY AND THIS GOES FULL PROD

    throw new Error("stand in to not have too many api calls in dev");
  } catch (error) {
    return getDefaultCinemaTimes(film);
  }
}

export default movieDetails;
