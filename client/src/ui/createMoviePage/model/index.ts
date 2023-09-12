import { Model } from "../../../shared/lib";
import { ModelMovieFormData } from "./interface";

export class CreateMovieModel extends Model<ModelMovieFormData> {
  constructor(
    payload: ModelMovieFormData = {
      name: "",
      directors: "",
      writers: "",
      tagline: "",
      score: 1,
      leadActors: "",
    },
  ) {
    super(payload);
  }
}
