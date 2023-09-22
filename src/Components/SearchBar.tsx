import { useRouter } from "next/router";
import React, { useState } from "react";

type SearchBarProps = {};

const SearchBar: React.FC<SearchBarProps> = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  function handleSubmit(e: any) {
    e.preventDefault();

    const path = router.pathname;

    if (path === "/search") {
      router.push("?movie=" + input);
    } else {
      router.push("search?movie=" + input);
    }
    setInput("")
  }

  return (
    <form className="form-inline flex" onSubmit={handleSubmit}>
      <div className="relative w-full">
        <div>
          <input
            className="text-sm[16px] w-full rounded-full border-0 px-5 py-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            className="absolute right-3 top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-700"
            type="submit"
          >
            <span className="icon">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.313 5.177c0-2.131 1.75-3.864 3.901-3.864s3.902 1.733 3.902 3.864a3.826 3.826 0 0 1-1.114 2.705 3.893 3.893 0 0 1-2.788 1.16c-2.151 0-3.901-1.733-3.901-3.865zm12.497 7.706-4.482-4.53a5.131 5.131 0 0 0 1.1-3.176C10.428 2.317 8.094 0 5.214 0 2.334 0 0 2.318 0 5.177c0 2.86 2.335 5.178 5.214 5.178a5.215 5.215 0 0 0 3.18-1.08l4.484 4.53a.655.655 0 1 0 .932-.922z"
                  fill="#fff"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};
export default SearchBar;
