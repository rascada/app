import {Injectable} from "angular2/core";
import {Mongoose} from "../../mongoose";

@Injectable()
export class Example {
    model;

    constructor(mg: Mongoose) {
        this.model = mg.db.model('example', {
            text: String,
            name: String,
        });
    }
}