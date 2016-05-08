# app
modern backend 
### work in progress

## example
```ts
import { Injectable } from 'angular2/core';
import Express = require('express');

import { Server, Sockets, bootstrap } from './../app';

@Injectable()
export class App {
    port: number = 7000;

    constructor(io: Sockets, app: Express, server: Server) {
        app.get('/', (req, res) => res.send('hello app'));
        io.on('connection', this.io.bind(this));
        server.listen(this.port);
    }

    io(socket) {
        socket.emit('hello', 'world');
    }
}

bootstrap(App);
```
