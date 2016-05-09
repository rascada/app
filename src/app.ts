import 'reflect-metadata';
import {ReflectiveInjector, provide} from 'angular2/core';
import Express = require('express');

import { Sockets } from './socket';
import { Server } from './server';
import { Mongoose } from './mongoose';
import { Models } from './models';

export {
    Mongoose,
    Sockets,
    Server,
    Models,
}

export function config(useClass) {
  return provide('config', { useClass });
}

export function bootstrap(App, ...providers) {
    const injector = ReflectiveInjector.resolveAndCreate([App, ...providers, Express, Sockets, Server, Mongoose, Models]);

    return injector.get(App);
}
