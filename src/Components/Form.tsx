import { useSession } from "next-auth/react";
import {
  FormEvent,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { api } from "~/utils/api";
import RatingsButton from "./RatingsButton";

const ratings = [1, 2, 3, 4, 5];

function updateTextAreaSize(textArea?: HTMLTextAreaElement) {
  if (textArea == null) return;
  textArea.style.height = "0";
  textArea.style.height = `${textArea.scrollHeight}px`;
}

export function Form({ movieName }: { movieName: string }) {
  const session = useSession();
  const [inputValue, setInputValue] = useState("");
  const [movieRating, setMovieRating] = useState(0);
  const [errors, setError] = useState("")
  const textAreaRef = useRef<HTMLTextAreaElement>();
  const inputRef = useCallback((textArea: HTMLTextAreaElement) => {
    updateTextAreaSize(textArea);
    textAreaRef.current = textArea;
  }, []);
  useLayoutEffect(() => {
    updateTextAreaSize(textAreaRef.current);
  }, [inputValue]);

  const createComment = api.comment.createComment.useMutation({
    onSuccess: () => {
      setInputValue("");
      setMovieRating(0);
      comments.refetch();
    },
  });

  const comments = api.comment.getMovieComments.useQuery({ movieName });
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      createComment.mutate({
        content: inputValue,
        movieName,
        rating: movieRating,
      });
    } catch (error: any) {
      setError(error.message)
    }
  }

  function handleClick(e: FormEvent) {
    e.preventDefault();
    // @ts-ignore
    const value = Number(e.currentTarget.value);
    setMovieRating(value);
  }

  if (session.status !== "authenticated") return;
  const imageSrc = session.data.user.image;

  return (
    <>
      <form
        className="flex flex-col gap-2 border-b px-4 py-2"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-4">
          {/* <ProfileImage src={imageSrc} /> */}
          <textarea
            ref={inputRef}
            style={{ height: 0 }}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none"
            placeholder="What's happening?"
          />
        </div>
        <div className="flex">
          <div className="flex pl-[16px]">
            {ratings.map((rating) => (
              <RatingsButton
                className={`mr-1 flex aspect-square h-6 rounded-full text-center text-white ${
                  rating === movieRating ? " bg-[#FF7300]" : "bg-slate-500"
                }`}
                rating={rating}
                key={rating}
                onClick={handleClick}
                value={rating}
              />
            ))}
          </div>
          <button className="ml-auto">Comment</button>
        </div>
      </form>
      {comments &&
        comments.data?.map((movie, idx) => (
          <p key={idx}>
            {movie.content} rating: {movie.rating}
          </p>
        ))}
    </>
  );
}
