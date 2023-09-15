import { useDetailedMovieService } from "./DetailedMovieServiceProvider";

export function MovieUpdateScoreWidget() {
  const { updateMovieScore, movie } = useDetailedMovieService();
  const scores = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="score-widget">
      {scores.map((score) => (
        <button
          key={score}
          className={score <= movie.score ? "score-button active" : "score-button"}
          onClick={() => updateMovieScore(score)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12,1.776l3.286,6.779l7.464,1.032l-5.433,5.221l1.326,7.417L12,18.67l-6.645,3.555l1.327-7.417L1.25,9.587l7.464-1.032L12,1.776z" />
          </svg>
        </button>
      ))}
    </div>
  );
}
