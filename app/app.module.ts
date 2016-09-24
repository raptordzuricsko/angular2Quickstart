import { NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//browsermodule is imported when we're going to run a web app in a browser.'

//every angular 2 app needs a module, which will probably import lots of other modules :)
@NgModule({
    imports: [//list of external modules used by module
        BrowserModule,
        FormsModule//two way data binding. includes new ngModel
        ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule{}
