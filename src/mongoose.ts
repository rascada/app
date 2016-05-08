import {Injectable, Inject} from "angular2/core";
import mongoose = require('mongoose');

@Injectable()
export class Mongoose {
    private db;
    constructor(@Inject('config') config) {
        this.db = mongoose;

        this.db.connect(`mongodb://${config.db.host}/${config.db.name}`);
    }
}