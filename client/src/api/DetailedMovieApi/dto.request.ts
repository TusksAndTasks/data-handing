export interface CreateMoviePostDTO {
  name: string;
  directors: Array<string>;
  writers: Array<string>;
  leadActors: Array<string>;
  tagline: string;
  score: number;
}
