import {Injectable} from "angular2/core";
import {Mongoose} from "./mongoose";

export interface ModelInterface {
    name: string;
    schema: Object;
}

@Injectable()
export class Models {
    constructor(private mg: Mongoose) { }

    add(name, schema) {
        this[name] = this.mg.db.model(name, schema);
    }

    load(...models) {
        models.forEach(model =>
            this.add(model.name, model.schema)
        );
    }
}