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
import { SingleComment } from "./SingleComment";

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
  const [errors, setError] = useState("");
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
      setError("");
      comments.refetch();
    },
    onError: (error: any) => {
      setError(error.message);
    },
  });

  const comments = api.comment.getMovieComments.useQuery({ movieName });
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    createComment.mutate({
      content: inputValue,
      movieName,
      rating: movieRating,
    });
  }

  function handleClick(e: FormEvent) {
    e.preventDefault();
    // @ts-ignore
    const value = Number(e.currentTarget.value);
    setMovieRating(value);
  }

  // if (session.status !== "authenticated") return;
  // const imageSrc = session.data.user.image;

  return (
    <>
      {errors && <p>{errors}</p>}
      {session.status === "authenticated" && (
        <form
          className="mb-8 flex flex-col gap-2 border-b px-4 py-2"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-4">
            {/* <ProfileImage src={imageSrc} /> */}
            <textarea
            id="_comment_box"
              ref={inputRef}
              style={{ height: 0 }}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none"
              placeholder="Leave a review."
            />
          </div>
          <div className="flex">
            <div className="flex items-center lg:items-end pl-[16px]">
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
            <button className="ml-auto rounded-full bg-blue-500 px-2 py-1 font-bold text-white transition-colors duration-200 hover:bg-blue-400 focus-visible:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-50">
              Comment
            </button>
          </div>
        </form>
      )}
      {comments &&
        comments.data?.map((comment, idx) => (
          <SingleComment comment={comment} key={idx} index={idx} />
        ))}
    </>
  );
}
