import { bootstrap } from './../app';
import { provide } from 'angular2/core';
import { App, Example, Config } from './example.app';

bootstrap(App, Example, provide('config', { useClass: Config }));