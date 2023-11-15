import { useRouter } from "next/router";
import React from "react";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { today } from "~/utils/dates";

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
  const router = useRouter();
  const queryDate = router.query.date ?? today();
  function normalizeTime(time: string) {
    const pm = !!time.match(/p$/);
    const hours = time.split(":")[0];
    const minutes = time.split(":")[1];
    if (pm && Number(hours) < 12) {
      return `${Number(hours) + 12}:${minutes}`;
    } else {
      return time;
    }
  }
  return (
    <button
      className={`mb-2 mr-2 h-[35px] w-[78px] rounded-md ${
        queryDate === today() && normalizeTime(time) > now ? "bg-[#FF7300]" : queryDate !== today() ? "bg-[#FF7300]" : "bg-[#999ea3]"
      }`}
      disabled={queryDate === today() && normalizeTime(time) < now}
      {...props}
    >
      <p className="font-[16px] text-white">{time}</p>
    </button>
  );
};
export default TimeButton;
