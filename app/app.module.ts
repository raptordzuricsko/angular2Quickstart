import { NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//browsermodule is imported when we're going to run a web app in a browser.'

//every angular 2 app needs a module, which will probably import lots of other modules :)
@NgModule({
    imports: [BrowserModule],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule{}
