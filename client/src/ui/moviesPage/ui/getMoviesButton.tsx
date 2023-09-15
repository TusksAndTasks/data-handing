import { observer } from "mobx-react-lite";

import { useMoviesStore } from "./moviesPageProvider";
export const GetMoviesButton = observer(() => {
  const { getMovies, movies } = useMoviesStore();

  return movies ? null : (
    <button className="button load-button" onClick={getMovies}>
      Загрузить фильмы
    </button>
  );
});
