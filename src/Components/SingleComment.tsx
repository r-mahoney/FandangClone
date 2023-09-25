import { useSession } from "next-auth/react";
import React from "react";
import { OneComment } from "~/Types/commentType";
import Stars from "./Stars";

type SingleCommentProps = {
  comment: OneComment;
  index: number
};

export const SingleComment: React.FC<SingleCommentProps> = ({ comment, index }) => {
  const session = useSession();
  const image = session.data?.user.image;
  const monthString = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  function getPostedDate() {
    const day = comment.createdAt.getDate();
    const month = comment.createdAt.getMonth();
    const year = comment.createdAt.getFullYear();
    const time =
      comment.createdAt.getHours() + ":" + comment.createdAt.getMinutes();
    
    return (`${day} ${monthString[month]} ${year} at ${time}`)
  }
  return (
    <div className={`flex justify-center pl-2 ${session.status !== "authenticated" && index === 0 ? "pt-8" : ""}`}>
      <div className="relative mb-8 grid w-full grid-cols-1 gap-4 rounded-lg border bg-white p-4 shadow-lg">
        <div className="relative flex gap-4">
          <img
            src={"https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
            }
            className="relative -top-8 -mb-4 h-20 w-20 rounded-lg border bg-white"
            alt=""
            loading="lazy"
          />
          <div className="flex w-full flex-col">
            <div className="flex flex-row justify-between">
              <p className="relative overflow-hidden truncate whitespace-nowrap text-xl">
                {comment.userName}
              </p>
              <a className="text-xl text-gray-500" href="#">
                <i className="fa-solid fa-trash"></i>
              </a>
            </div>
            <p className="text-sm text-gray-400">{getPostedDate()}</p>
            <div className="mb-2 flex">
              <Stars rating={comment.rating} />
            </div>
          </div>
        </div>
        <p className="-mt-4 text-gray-500">{comment.content}</p>
      </div>
    </div>
  );
};
