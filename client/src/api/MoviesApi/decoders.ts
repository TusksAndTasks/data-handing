import { array, field, number, string, succeed } from "jsonous";

export const MoviesDecoder = array(
  succeed({})
    .assign("id", field("movie_id", number))
    .assign("name", field("movie_name", string))
    .assign("directors", field("movie_directors", array(string)))
    .assign("writers", field("movie_writers", array(string))),
);
