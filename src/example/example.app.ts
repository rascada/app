import { Injectable } from 'angular2/core';
import Express = require('express');

import { Server, Sockets, Models } from './../app';
import { html } from './example.content';
import { example } from "./model/example.model";

export class Config {
    db = {
        name: 'app-test',
        host: 'localhost',
    };
}

@Injectable()
export class App {
    port: number = 7000;

    constructor(
        private models: Models,
        server: Server,
        app: Express,
        io: Sockets
    ) {
        app.get('/', (req, res) => res.send(html));
        io.on('connection', this.io.bind(this));
        server.listen(this.port);

        models.load(example); // , ...models);
        /*
         * this.models.example
         * this.models.modelName1
         * this.models.modelName2
         */
    }

    io(socket) {
        socket.emit('hello', 'world');

        this.models.example.find()
            .then(examples => socket.emit('examples', examples));
    }
}