import { observer } from "mobx-react-lite";
import React, { useMemo } from "react";

import { useDetailedMovieService } from "./CreateMovieServiceProvider";
import { CreateMovieModel } from "../model";

export const MovieCreateForm = observer(() => {
  const { createMovie } = useDetailedMovieService();
  // возможно вынесение в контекст.
  const model = useMemo(() => new CreateMovieModel(), []);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createMovie(model.state);
  };

  return (
    <form onSubmit={handleSubmit} className="create-form">
      <h2>Добавить новый фильм</h2>
      <label className="create-form-label">
        Название:
        <input
          value={model.state.name}
          onChange={(e) => model.set("name", e.target.value)}
          className="create-form-input"
        />
      </label>
      <label className="create-form-label">
        Слоган:
        <input
          value={model.state.tagline}
          onChange={(e) => model.set("tagline", e.target.value)}
          className="create-form-input"
        />
      </label>
      <label className="create-form-label">
        Режиссеры (разделяются с помощью ';'):
        <input
          value={model.state.directors}
          onChange={(e) => model.set("directors", e.target.value)}
          className="create-form-input"
        />
      </label>
      <label className="create-form-label">
        Сценаристы (разделяются с помощью ';'):
        <input
          value={model.state.writers}
          onChange={(e) => model.set("writers", e.target.value)}
          className="create-form-input"
        />
      </label>
      <label className="create-form-label">
        Главные актеры (разделяются с помощью ';'):
        <input
          value={model.state.leadActors}
          onChange={(e) => model.set("leadActors", e.target.value)}
          className="create-form-input"
        />
      </label>
      <label className="create-form-label">
        Оценка:
        <input
          type="number"
          min={1}
          max={5}
          value={model.state.score}
          onChange={(e) => model.set("score", +e.target.value)}
          className="create-form-input"
        />
      </label>
      <button className="button create-button" type="submit">
        Добавить
      </button>
    </form>
  );
});
