import React from "react";
import { MovieDate } from "~/Types/dateType";
import { today } from "~/utils/dates";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

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
      className={`movieTimes mr-1 flex w-10 flex-col rounded-md border border-solid border-gray-300 bg-white md:mr-3 md:h-20 md:w-16 ${
        queryDate
          ? date.dateString === queryDate
            ? "active-movie-date"
            : ""
          : date.dateString === today()
          ? "active-movie-date"
          : ""
      }`}
    >
      <button {...props}>
        <p
          className={`mt-[7px] h-[12px] text-xs font-bold md:text-sm ${
            queryDate
              ? date.dateString === queryDate
                ? "text-white"
                : "text-[#3478c1]"
              : date.dateString === today()
              ? "text-white"
              : "text-[#3478c1]"
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
