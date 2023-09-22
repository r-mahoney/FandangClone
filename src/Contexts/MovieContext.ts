import { createContext } from "react";

const MoviesContext = createContext<{ movies: any[] }>({ movies: [] });

export default MoviesContext;
