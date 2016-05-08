import { Injectable } from 'angular2/core';
import Express = require('express');
import http = require('http');

@Injectable()
export class Server extends http.Server {    
    constructor(express: Express) {
        super(express);
    }
}