import {DetailedMovie} from "./domain";

export class DetailedMovieEntity implements DetailedMovie {
    id: number;
    name: string;
    directors: Array<string>;
    writers: Array<string>;
    leadActors: Array<string>;
    tagline: string;
    score: number;

    constructor({id, name, directors, writers, leadActors, tagline, score}: DetailedMovie){
        this.id = id;
            this.name = name;
            this.directors = directors;
            this.writers = writers;
            this.leadActors = leadActors;
            this.tagline = tagline;
            this.score = score;
    }

}