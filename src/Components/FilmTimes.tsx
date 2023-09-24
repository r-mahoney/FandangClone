import React from "react";
import { Cinema } from "~/Types/cinemaTypes";
import ShowType from "./ShowType";

type FilmtimesProps = {
  cinema: Cinema;
};

const FilmTimes: React.FC<FilmtimesProps> = ({ cinema }) => {
  return (
    <>
      <div className="float-right">
        <p className="text-[10pt]">
          {cinema.distance.toFixed(2)} <span className="text-[8pt]">mi</span>
        </p>
      </div>
      <p className="font-bold pb-6">{cinema.cinema_name}</p>
      <div>
        {Object.keys(cinema.showings).map((showType, idx) => (
          <div key={idx}>
            <p className="font-bold pb-3">{showType}</p>
            <ShowType cinema={cinema} showType={showType} />
          </div>
        ))}
      </div>
    </>
  );
};
export default FilmTimes;
