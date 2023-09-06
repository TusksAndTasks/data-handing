import { ModelMovieFormData } from "../../ui/createMoviePage/model/interface";
import { CreateMoviePostDTO } from "./dto.request";

export const CreateMovieEncoder = ({
  name,
  tagline,
  directors,
  leadActors,
  writers,
  score,
}: ModelMovieFormData): CreateMoviePostDTO => {
  return {
    name,
    tagline,
    directors: directors
      .trim()
      .split(";")
      .filter((entry) => entry),
    writers: writers
      .trim()
      .split(";")
      .filter((entry) => entry),
    leadActors: leadActors
      .trim()
      .split(";")
      .filter((entry) => entry),
    score,
  };
};
