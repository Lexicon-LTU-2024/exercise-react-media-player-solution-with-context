import { createContext, ReactElement, ReactNode, useState } from "react";
import { moviesFromData } from "../data";
import { IMovie, IMovieContext } from "../interfaces";

interface IMovieProviderProps {
  children: ReactNode;
}

// export const MovieContext = createContext<IMovieContext | undefined>(undefined);
export const MovieContext = createContext<IMovieContext>({} as IMovieContext);

export function MovieProvider({ children }: IMovieProviderProps): ReactElement {
  const [movies, setMovies] = useState<IMovie[]>(moviesFromData);

  const addMovie = (movie: IMovie) => {
    setMovies([movie, ...movies]);
  };

  const removeMovie = (movie: IMovie): void => {
    setMovies(movies.filter((m) => m !== movie));
  };

  const values: IMovieContext = {
    movies,
    addMovie,
    removeMovie,
  };

  return <MovieContext.Provider value={values}>{children}</MovieContext.Provider>;
}
