import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import { useMoviesStore } from "./moviesPageProvider";
import { appRoutes } from "../../../shared/config";

export const MovieList = observer(() => {
  const { movies } = useMoviesStore();
  const navigate = useNavigate();

  return (
    movies && (
      <div className="movie-list-container">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h2>{movie.name}</h2>
            <p className="movie-data-title">Режиссеры:</p>
            <div className="movie-data-block">
              {movie.directors.map((director) => (
                <p key={director}>{director}</p>
              ))}
            </div>
            <p className="movie-data-title">Сценаристы:</p>
            <div className="movie-data-block">
              {movie.writers.map((writer) => (
                <p key={writer}>{writer}</p>
              ))}
            </div>
            <button
              className="button more-data-button"
              onClick={() => navigate(appRoutes.getDetailedMoviePageUrlWithId(movie.id))}
            >
              Подробнее
            </button>
          </div>
        ))}
      </div>
    )
  );
});
