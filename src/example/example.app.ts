import { Injectable } from 'angular2/core';
import Express = require('express');

import { Server, Sockets } from './../app';
import { html } from './example.content';
import { Example } from "./model/example.model";

export { Example }

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
        io: Sockets, 
        app: Express, 
        server: Server, 
        private example: Example
    ) {
        app.get('/', (req, res) => res.send(html));
        io.on('connection', this.io.bind(this));
        server.listen(this.port);
    }

    io(socket) {
        socket.emit('hello', 'world');

        this.example.model.find()
            .then(examples => socket.emit('examples', examples));

    }
}