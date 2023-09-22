import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import React from "react";
import { MovieDate } from "~/Types/dateType";

type DateButtonProps = {
  date: MovieDate;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const DateButton: React.FC<DateButtonProps> = ({
  date,
  ...props
}: DateButtonProps) => {
  return (
    <div className="mr-3 flex h-20 w-20 flex-col border border-red-400">
      <button {...props}>
        <p>{date.day}</p>
        <p>{date.month}</p>
        <p>{date.date}</p>
      </button>
    </div>
  );
};
export default DateButton;
