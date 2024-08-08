import { useOutletContext } from "react-router-dom";
import { IMovieContext } from "../interfaces";

export function useMovieLogic(): IMovieContext {
  return useOutletContext<IMovieContext>();
}
