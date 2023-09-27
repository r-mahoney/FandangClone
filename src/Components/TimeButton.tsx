import React from "react";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type TimeButtonProps = {
  time: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const TimeButton: React.FC<TimeButtonProps> = ({
  time,
  ...props
}: TimeButtonProps) => {
  const date = new Date();
  const now = date.getHours() + ":" + date.getMinutes();
  return (
    <button
      className={`mr-2 h-[35px] w-[78px] rounded-md mb-2 ${
        time > now ? "bg-[#FF7300]" : "bg-[#999ea3]"
      }`}
      disabled={time < now}
      {...props}
    >
      <p className="font-[16px] text-white">{time}</p>
    </button>
  );
};
export default TimeButton;
