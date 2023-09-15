import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useLocation } from "react-router";

import { useDetailedMovieService } from "./DetailedMovieServiceProvider";
import { MovieUpdateScoreWidget } from "./MovieUpdateScoreWidget";

export const MovieCard = observer(() => {
  const { movie, getMovie } = useDetailedMovieService();
  const movieId = +useLocation().pathname.split("/").at(-1)!;

  useEffect(() => {
    getMovie(movieId);
  }, []);

  return movie ? (
    <div className="movie-card">
      <h2>{movie.name}</h2>
      <p className="movie-data-title">Слоган:</p>
      <div className="movie-data-block">
        <p>{movie.tagline}</p>
      </div>
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
      <p className="movie-data-title">Главные актеры:</p>
      <div className="movie-data-block">
        {movie.leadActors.map((actor) => (
          <p key={actor}>{actor}</p>
        ))}
      </div>
      <p className="movie-data-title">Оценка:</p>
      <MovieUpdateScoreWidget />
    </div>
  ) : null;
});
