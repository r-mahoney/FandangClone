import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import React from "react";
import { MovieDate } from "~/Types/dateType";

type DateButtonProps = {
  date: MovieDate;
  queryDate: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const DateButton: React.FC<DateButtonProps> = ({
  date,
  queryDate,
  ...props
}: DateButtonProps) => {
  return (
    <div className={`mr-3 flex h-20 w-16 rounded-md flex-col border border-solid border-gray-300 movieTimes ${date.dateString === queryDate ? "active-movie-date" : ""}`}>
      <button {...props} >
        <p className={`text-sm font-bold h-[12px] mt-[7px] ${date.dateString === queryDate ? "text-white" : "text-[#3478c1]"}`}>{date.day}</p>
        <p className="mt-[5px] text-[12px]">{date.month}</p>
        <p className="text-[20px] font-[400]">{date.date}</p>
      </button>
    </div>
  );
};
export default DateButton;
