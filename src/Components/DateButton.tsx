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
    <div
      className={`w-10 movieTimes flex flex-col rounded-md border border-solid border-gray-300 md:mr-3 mr-1 md:h-20 md:w-16 ${
        date.dateString === queryDate ? "active-movie-date" : ""
      }`}
    >
      <button {...props}>
        <p
          className={`mt-[7px] h-[12px] text-xs font-bold md:text-sm ${
            date.dateString === queryDate ? "text-white" : "text-[#3478c1]"
          }`}
        >
          {date.day}
        </p>
        <p className="mt-[5px] text-[12px]">{date.month}</p>
        <p className="text-xs font-[400] md:text-[20px]">{date.date}</p>
      </button>
    </div>
  );
};
export default DateButton;
