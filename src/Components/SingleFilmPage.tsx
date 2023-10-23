import React, {
  ButtonHTMLAttributes,
  FormEvent,
  useEffect,
  useState,
} from "react";
import { Film } from "~/Types/movieTypes";
import Image from "next/image";
import Trailer from "./Trailer";
import { api } from "~/utils/api";

type SingleFilmPageProps = {
  film: Film;
};

const SingleFilmPage: React.FC<SingleFilmPageProps> = ({ film }) => {
  const avgRatingCall = api.comment.getAverageRating.useQuery({
    movieName: film.film_name,
  });
  const comments = api.comment.getMovieComments.useQuery({
    movieName: film.film_name,
  });
  const avgRating = avgRatingCall.data;

  const [expanded, setExpanded] = useState(false);
  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    setExpanded((prevValue) => !prevValue);
  };
  useEffect(() => {
    avgRatingCall.refetch();
  }, [comments.data?.length]);

  return (
    <>
      <section className="rounded-lg border border-solid border-gray-300 p-4">
        <div className="flex justify-between">
          <div>
            {film.film_image &&
              <Image
                src={film.film_image}
                alt="Movie Poster"
                height={film.film_image_height}
                width={film.film_image_width}
                priority
                className="m-0 max-w-none rounded-md border border-solid border-gray-300"
              />
            }
            {!film.film_image &&
              <Image
                src={"/defaultmovie.jpg"}
                alt="No Movie Poster"
                height={300}
                width={200}
                priority
                className="m-0 max-w-none rounded-md border border-solid border-gray-300"
              />
            }
          </div>
          <div className="flex flex-col items-end">
            <Trailer film={film} />
          </div>
        </div>
        <div className="my-4 flex justify-between">
          <h1 className="text-lg font-bold uppercase">{film.film_name}</h1>
          <p>Community Rating: {avgRating?.toFixed(1) || "No Ratings Yet"}</p>
        </div>
        <p
          className={
            expanded
              ? "w-full whitespace-normal"
              : "w-[70%] overflow-hidden text-ellipsis whitespace-nowrap"
          }
        >
          {film.synopsis_long}
        </p>
        <div className="flex justify-end">
          <button onClick={handleClick}>
            {expanded ? "Hide Details" : "Show More"}
          </button>
        </div>
      </section>
    </>
  );
};
export default SingleFilmPage;
