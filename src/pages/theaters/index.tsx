import { useRouter } from "next/router";
import React from "react";
import DateButton from "~/Components/DateButton";
import TheaterCard from "~/Components/TheaterCard";
import { api } from "~/utils/api";
import { getNextSeven, today } from "~/utils/dates";

type indexProps = {};

const index: React.FC<indexProps> = () => {
  const movieDates = getNextSeven(today());
  const router = useRouter();
  const queryDate = router.query.date ?? today();
  const theatersData = api.theater.getTheaters.useQuery({
    date: queryDate as string,
  }).data;
  const movies = api.theater.findMoviesForTheater.useQuery({
    date: queryDate as string,
  }).data;

  return (
    <div className="flex">
      <div className="flex-[3] p-4">
        <div className="mt-0 flex">
          {movieDates.map((date, index) => (
            <DateButton
              date={date}
              queryDate={queryDate as string}
              onClick={() => {
                router.push(
                  {
                    pathname: `/theaters`,
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
        {theatersData &&
          theatersData.map((cinema_name: string) => {
            const cinemaMovies = movies?.filter(
              (movie) => movie.cinema_name === cinema_name,
            );
            return (
              cinemaMovies && <TheaterCard
                cinema_name={cinema_name}
                key={cinema_name}
                movies={cinemaMovies}
              />
            );
          })}
      </div>
      <div className="flex-1"></div>
    </div>
  );
};
export default index;
