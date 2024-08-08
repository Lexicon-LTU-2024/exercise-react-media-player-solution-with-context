import { IMovieContext } from "../interfaces";
import { useContext } from "react";
import { MovieContext } from "../context/MovieProvider";

export function useMovieLogic(): IMovieContext {
  return useContext(MovieContext);
}
