import {Movie} from "./domain"
export class MovieEntity implements Movie {
     id: number;
     name: string;
     directors: Array<string>;
     writers: Array<string>;

    constructor({id, name, directors, writers}: Movie){
        this.id = id;
        this.name = name;
        this.directors = directors;
        this.writers = writers;
    }

}