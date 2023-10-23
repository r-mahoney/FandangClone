import { useRouter } from "next/router";
import React from "react";
import DateButton from "~/Components/DateButton";
import TheaterCard from "~/Components/TheaterCard";
import { getNextSeven, today } from "~/utils/dates";
import getTheaters from "~/utils/getTheaters";

type indexProps = {};

const index: React.FC<indexProps> = () => {
  const movieDates = getNextSeven(today());
  const router = useRouter();
  const queryDate = router.query.date || today();
  const theaters = getTheaters()
  const dateKeys = Object.keys(theaters)

  return (
    <div className="flex">
      <div className="p-4 flex-[3]">
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

          {dateKeys.map((chosenDate: string) => (
            //@ts-ignore
            //TODO
            //COME BACK TO FIX THIS ERROR VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
            chosenDate === queryDate ? <TheaterCard theaters={theaters[chosenDate]} key={chosenDate}/> : ""
          ))}
      </div>
      <div className="flex-1">

      </div>
    </div>
  );
};
export default index;
