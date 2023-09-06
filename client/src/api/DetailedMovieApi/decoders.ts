import { array, field, number, string, succeed } from "jsonous";

export const DetailedMovieDecoder = succeed({})
  .assign("id", field("movie_id", number))
  .assign("name", field("movie_name", string))
  .assign("directors", field("movie_directors", array(string)))
  .assign("writers", field("movie_writers", array(string)))
  .assign("leadActors", field("movie_lead_actors", array(string)))
  .assign("tagline", field("movie_tagline", string))
  .assign("score", field("movie_score", number));
