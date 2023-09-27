import React from "react";
import { Cinema, ShowTimes } from "~/Types/cinemaTypes";
import TimeButton from "./TimeButton";

type ShowTypeProps = {
  cinema: Cinema;
  showType: string;
};

const ShowType: React.FC<ShowTypeProps> = ({ showType, cinema }) => {
  return (
    <div className="flex pb-[12px] flex-wrap">
      {/* @ts-ignore */}
      {cinema.showings[showType].times.map((time, idx) => (
        <TimeButton time={time.start_time} onClick={() => {}} key={idx} />
      ))}
    </div>
  );
};
export default ShowType;
