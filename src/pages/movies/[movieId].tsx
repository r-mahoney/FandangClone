import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import DateButton from "~/Components/DateButton";
import FilmTimes from "~/Components/FilmTimes";
import NewCommentForm from "~/Components/NewCommentForm";
import SingleFilmPage from "~/Components/SingleFilmPage";
import MoviesContext from "~/Contexts/MovieContext";
import { Film } from "~/Types/movieTypes";
import { getNextSeven, today } from "~/utils/dates";
import getDefaultCinemaTimes from "~/utils/defaultCinemas";

const movieDetails = () => {
  const { movies } = useContext(MoviesContext);
  const [cinemas, setCinemas] = useState<any[]>([]);
  const router = useRouter();
  const queryDate = router.query.date;
  const movieId = router.query.movieId;
  const data = movies.filter((movie) => movie.film_id == movieId)[0] as Film;
  const movieDates = getNextSeven(today());
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
      const response = await getCinemaTimes(
        options,
        movieId as string,
        data,
        queryDate as string,
      );
      setCinemas(response.cinemas);
    })();
    router.push(
      {
        pathname: `/movies/${movieId}`,
        query: {
          date: queryDate || today(),
        },
      },
      undefined,
      { scroll: false },
    );
  }, [router.isReady, movieId, data, queryDate]);

  return (
    <div className="body">
      <div className="flex px-5">
        <div className="flex-[3_3_0%] py-5">
          {data && (
            <>
              <SingleFilmPage film={data} />
            </>
          )}
          <div className="mt-3 flex">
            {movieDates.map((date, index) => (
              <DateButton
                date={date}
                queryDate={queryDate as string}
                onClick={() => {
                  router.push(
                    {
                      pathname: `/movies/${movieId}`,
                      query: {
                        date: date.dateString,
                      },
                    },
                    undefined,
                    { scroll: false },
                  );
                  document.querySelectorAll(".movieTimes")?.forEach((node) => {
                    node.classList.remove("active-movie-date");
                  });
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
        <div className="flex-[2_2_0%]">
          {data && <NewCommentForm movieName={data.film_name} />}
        </div>
      </div>
    </div>
  );
};

export async function getCinemaTimes(
  options: object,
  movieId: string,
  film: Film,
  date: string,
) {
  try {
    // const response = await fetch(
    //   `https://api-gate2.movieglu.com/filmShowTimes/?film_id=${movieId}&date=${date}&n=10`,
    //   options,
    // );
    // const data = await response.json();
    // return data;

    //CAN MAYBE DO ANOTHER API CALL FOR FILM DETAILS TO GET RATINGS/FILM DURATION/GENRE
    //WOULD BE GOOD IF I EVER PAY AND THIS GOES FULL PROD

    throw new Error("stand in to not have too many api calls in dev");
  } catch (error) {
    return getDefaultCinemaTimes(film);
  }
}

export default movieDetails;
