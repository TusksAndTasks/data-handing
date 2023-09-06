import { METHODS, RequestManager } from "../RequestManager";
import { Movie } from "../../entities/MovieEntity/domain";
import { MoviesDecoder } from "./decoders";

export class MoviesApi extends RequestManager {
  public async getMovies(): Promise<Array<Movie>> {
    return await this.createRequest<Array<Movie>>({
      url: "/api/movies",
      method: METHODS.GET,
      requestConfig: {},
      serverDataDecoder: MoviesDecoder,
    })();
  }
}
