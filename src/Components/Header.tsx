import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { GoPerson } from "react-icons/go";
import { RiMovie2Line } from "react-icons/ri";
import { IoTicketOutline } from "react-icons/io5";
import SearchBar from "./SearchBar";

function Header() {
  const { data: sessionData } = useSession();
  const Icon = GoPerson;
  const Movie = RiMovie2Line;
  const Ticket = IoTicketOutline;

  return (
    <div className="flex justify-between bg-black">
      <div className="flex flex-1 items-center">
        <Link href={"/"}>
          <p className="ml-10 text-2xl text-orange-600">FandangClone</p>
        </Link>
      </div>
      <div className="m-auto hidden flex-1 md:block">
        <SearchBar />
      </div>
      <div className="flex flex-1 justify-end">
        <div className="mr-5 hidden flex-col items-center justify-center md:flex">
          <button className="border-white-500 mt-1 h-10 w-10 rounded-full border border-solid bg-slate-700 text-white transition hover:bg-slate-500">
            <Link href={"/theaters"}>
              <Ticket fontSize={"24pt"} className="m-auto" />
            </Link>
          </button>
          <p className="text-center text-sm text-white">Theaters</p>
        </div>
        <div className="mr-5 hidden flex-col items-center justify-center md:flex">
          <button className="border-white-500 mt-1 h-10 w-10 rounded-full border border-solid bg-slate-700 text-white transition hover:bg-slate-500">
            <Link href={"/movies"}>
              <Movie fontSize={"24pt"} className="m-auto" />
            </Link>
          </button>
          <p className="text-center text-sm text-white">Movies</p>
        </div>
        <div className="mr-5 hidden flex-col items-center justify-center md:flex">
          <button
            className="border-white-500 mt-1 h-10 w-10 rounded-full border border-solid bg-slate-700 text-white transition hover:bg-slate-500"
            onClick={sessionData ? () => void signOut() : () => void signIn()}
          >
            <Icon fontSize={"24pt"} className="m-auto" />
          </button>
          <p className="text-center text-sm text-white">
            {sessionData ? (
              <span>Hello {sessionData.user?.name?.split(" ")[0]}</span>
            ) : (
              "Sign In"
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
