import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Comments from "~/Components/Comments";
import DateButton from "~/Components/DateButton";
import FilmTimes from "~/Components/FilmTimes";
import SingleFilmPage from "~/Components/SingleFilmPage";
import { Film } from "~/Types/movieTypes";
import { api } from "~/utils/api";
import { getNextSeven, today } from "~/utils/dates";
import getDefaultCinemaTimes from "~/utils/defaultCinemas";
import getOptions from "~/utils/headers";

const movieDetails = () => {
  const [cinemas, setCinemas] = useState<any[]>([]);
  const router = useRouter();
  const queryDate = router.query.date;
  const movieId = router.query.movieId;
  const foundMovie = api.movie.findMovie.useQuery({film_id: Number(movieId)}).data
  const movieDates = getNextSeven(today());
  const options = getOptions()

  useEffect(() => {
    if (!router.isReady) return;
    if (!foundMovie) return;
    (async function () {
      const response = await getCinemaTimes(
        options,
        movieId as string,
        foundMovie,
        queryDate as string,
      );
      setCinemas(response.cinemas);
    })();
  }, [router.isReady, movieId, foundMovie, queryDate]);

  return (
    <div className="body">
      <div className="flex px-5">
        <div className="flex-[3_3_0%] overflow-auto py-5">
          {foundMovie && (
            <>
              <SingleFilmPage film={foundMovie} />
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
                idx === cinemas.length - 1 ? "mb-0" : ""
              }`}
              key={cinema.cinema_id}
            >
              <FilmTimes cinema={cinema} />
            </section>
          ))}
        </div>
        <div className="hidden flex-[2_2_0%] md:block">
          {foundMovie && <Comments movieName={foundMovie.film_name!} />}
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
