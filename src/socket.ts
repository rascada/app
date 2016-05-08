import {Injectable} from 'angular2/core';
import Io = require('socket.io');

import {Server} from './server';

@Injectable()
export class Sockets extends Io {
    constructor(server: Server) {
        super(server);
    }
}