import React from "react";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type RatingsButtonProps = {
  rating: number;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const RatingsButton: React.FC<RatingsButtonProps> = ({
  rating,
  ...props
}: RatingsButtonProps) => {
  return (
    <button
      className="mr-1 flex aspect-square h-6 rounded-full bg-[#FF7300] text-center text-white"
      {...props}
    >
      <p className="mx-auto my-0 font-bold">{rating}</p>
    </button>
  );
};
export default RatingsButton;
