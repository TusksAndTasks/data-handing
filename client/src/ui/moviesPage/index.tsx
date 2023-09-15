import { memo } from "react";

import { MoviesPageProvider, MovieList, GetMoviesButton } from "./ui";
import "./index.css";

const MoviesPage = () => {
  return (
    <MoviesPageProvider>
      <div className="movies-page-container">
        <MovieList />
        <GetMoviesButton />
      </div>
    </MoviesPageProvider>
  );
};

export const Component = memo(MoviesPage);
