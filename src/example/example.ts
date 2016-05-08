import { bootstrap, config } from './../app';
import { App, Example, Config } from './example.app';

bootstrap(App, Example, config(Config));
