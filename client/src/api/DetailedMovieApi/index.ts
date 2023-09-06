import { METHODS, RequestManager } from "../RequestManager";
import { DetailedMovie } from "../../entities/DetailedMovieEntity/domain";
import { DetailedMovieDecoder } from "./decoders";
import { CreateMovieEncoder } from "./encoders";
import { ModelMovieFormData } from "../../ui/createMoviePage/model/interface";

export class DetailedMovieApi extends RequestManager {
  public async getMovie(id: number): Promise<DetailedMovie> {
    return await this.createRequest<DetailedMovie>({
      url: `/api/movies/${id}`,
      method: METHODS.GET,
      requestConfig: {},
      serverDataDecoder: DetailedMovieDecoder,
    })();
  }

  public async updateMovieScore(id: number, score: number): Promise<DetailedMovie> {
    return await this.createRequest<DetailedMovie>({
      url: `/api/movies/${id}`,
      method: METHODS.PUT,
      requestConfig: {},
      serverDataDecoder: DetailedMovieDecoder,
    })({ body: { data: { movie_score: score } } });
  }

  public async createMovie(payload: ModelMovieFormData): Promise<DetailedMovie> {
    const body = { data: CreateMovieEncoder(payload) };

    return await this.createRequest<DetailedMovie>({
      url: "/api/movies",
      method: METHODS.POST,
      requestConfig: {},
      serverDataDecoder: DetailedMovieDecoder,
    })({ body });
  }
}
