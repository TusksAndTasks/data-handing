import { memo } from "react";

import { DetailedMoviePageProvider, MovieCard } from "./ui";
import "./index.css";

function DetailedMoviePage() {
  return (
    <DetailedMoviePageProvider>
      <MovieCard />
    </DetailedMoviePageProvider>
  );
}

export const Component = memo(DetailedMoviePage);
