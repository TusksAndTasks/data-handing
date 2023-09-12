import { memo } from "react";

import { CreateMoviePageProvider, MovieCreateForm } from "./ui";
import "./index.css";

function CreateMoviePage() {
  return (
    <CreateMoviePageProvider>
      <MovieCreateForm />
    </CreateMoviePageProvider>
  );
}

export const Component = memo(CreateMoviePage);
