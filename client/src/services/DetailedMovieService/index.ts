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
    const movie = await this.api.getMovie(id);
    this.state = new DetailedMovieEntity(movie);
  };

  public createMovie = async (payload: ModelMovieFormData) => {
    await this.api.createMovie(payload);
  };

  public updateMovieScore = async (score: number) => {
    const movie = await this.api.updateMovieScore(this.movie.id, score);
    this.state = new DetailedMovieEntity(movie);
  };
}
