import React from "react";
import { Cinema } from "~/Types/cinemaTypes";

type FilmtimesProps = {
  cinema: Cinema;
};

const FilmTimes: React.FC<FilmtimesProps> = ({ cinema }) => {
  return (
    <>
      <div className="float-right">
        <p className="text-[10pt]">{(cinema.distance).toFixed(2)} <span className="text-[8pt]">mi</span></p>
      </div>
      <p className="font-bold">{cinema.cinema_name}</p>
    </>
  );
};
export default FilmTimes;
