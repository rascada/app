# app
backend with angular2 dependency injection

### work in progress

## example
```ts
import { Injectable } from 'angular2/core';
import Express = require('express');

import { Server, Sockets, bootstrap } from 'src/app';

@Injectable()
export class App {
    port: number = 7000;
    msg: string = 'hello world';

    // we tell app to inject: socket.io, express and node http server
    constructor(io: Sockets, app: Express, server: Server) {
        app.get('/', (req, res) => res.send(this.msg));
        io.on('connection', this.io.bind(this));

        // server have attached express, socket.io use it as well
        server.listen(this.port);
    }

    io(socket) {
        socket.emit('messsage', this.msg);
    }
}

bootstrap(App);
```
