import { createContext, ReactElement, ReactNode, useState } from "react";
import { moviesFromData } from "../data";
import { IMovie, IMovieContext } from "../interfaces";

interface IMovieProviderProps {
  children: ReactNode;
}

/**
 * The MovieContext is the react specific tool that provides the functionality the share the data
 * across the application. But it needs a provider that handles the data.
 */
export const MovieContext = createContext<IMovieContext>({} as IMovieContext);

/**
 * The MovieProvider acts like a central hub for the data that is shared across the application.
 * The MovieProvider owns and controls the data. Other components in the application can "subscribe"
 * to this data by using a hook called "useContext".
 */
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

  /**
   * This JSX element is something the the MovieContext provides, and it will act like a "parent element"
   * the the entire application och specific parts of the application. It allows the data to be shared with
   * the children components. MovieContext is just an object, we can't return that, that's why we have the
   * ".Provider" attribute that is a Component that we can return.
   */
  return <MovieContext.Provider value={values}>{children}</MovieContext.Provider>;
}
