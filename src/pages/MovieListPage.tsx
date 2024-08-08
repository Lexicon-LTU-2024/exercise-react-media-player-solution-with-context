import { ReactElement } from "react";
import { MovieCard } from "../components";
import { useMovieLogic } from "../hooks";

export function MovieListPage(): ReactElement {
  const { movies } = useMovieLogic();

  return (
    <section className="movie-list">
      {movies.map((m) => (
        <MovieCard key={m.title} movie={m} />
      ))}
    </section>
  );
}
