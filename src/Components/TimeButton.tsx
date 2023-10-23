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
  function normalizeTime(time: string) {
    const pm = !!time.match(/p$/)
    const hours = time.split(":")[0]
    const minutes = time.split(":")[1]
    if(pm && Number(hours) < 12) {
      return `${Number(hours) + 12}:${minutes}`
    } else {
      return time
    }
  }
  return (
    <button
      className={`mr-2 h-[35px] w-[78px] rounded-md mb-2 ${
        normalizeTime(time) > now ? "bg-[#FF7300]" : "bg-[#999ea3]"
      }`}
      disabled={normalizeTime(time) < now}
      {...props}
    >
      <p className="font-[16px] text-white">{time}</p>
    </button>
  );
};
export default TimeButton;
