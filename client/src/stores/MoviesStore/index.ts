import { makeAutoObservable } from "mobx";

import { MoviesApi } from "../../api/MoviesApi";
import { MovieEntity } from "../../entities/MovieEntity";

export class MoviesStore {
  private api = new MoviesApi();
  private state!: Array<MovieEntity>;

  constructor() {
    makeAutoObservable(this);
  }

  public getMovies = async () => {
    try {
      const movies = await this.api.getMovies();
      this.state = movies.map((movie) => new MovieEntity(movie));
    } catch (e) {
      console.log(e);
    }
  };

  get movies() {
    return this.state;
  }
}
