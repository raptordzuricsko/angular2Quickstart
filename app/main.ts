import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

//initialize the platform for the application to run in
//use platform to bootstrap the module. You might want to import from angularCore, or apache cordova or nativescript if you want to write this for mobile
 
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);