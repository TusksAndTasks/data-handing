import { makeAutoObservable } from "mobx";

import { DetailedMovieApi } from "../../api/DetailedMovieApi";
import { DetailedMovieEntity } from "../../entities/DetailedMovieEntity";
import { ModelMovieFormData } from "../../ui/createMoviePage/model/interface";

export class DetailedMovieService {
  private api = new DetailedMovieApi();
  private state!: DetailedMovieEntity;

  constructor() {
    makeAutoObservable(this);
  }

  get movie() {
    return this.state;
  }

  public getMovie = async (id: number) => {
    try {
      const movie = await this.api.getMovie(id);
      this.state = new DetailedMovieEntity(movie);
    } catch (e) {
      console.log(e);
    }
  };

  public createMovie = async (payload: ModelMovieFormData) => {
    try {
      await this.api.createMovie(payload);
    } catch (e) {
      console.log(e);
    }
  };

  public updateMovieScore = async (score: number) => {
    try {
      const movie = await this.api.updateMovieScore(this.movie.id, score);
      this.state = new DetailedMovieEntity(movie);
    } catch (e) {
      console.log(e);
    }
  };
}
