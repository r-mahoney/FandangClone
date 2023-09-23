import React from "react";
import { Cinema, ShowTimes } from "~/Types/cinemaTypes";

type CinemaTimesProps = {
  showType: {
    times: ShowTimes[]
  }
};

const CinemaTimes: React.FC<CinemaTimesProps> = ({showType}) => {
  return (
    <div>{showType.times.map(time => (
        <p>{time.start_time}</p>
    ))}</div>
  );
};
export default CinemaTimes;
