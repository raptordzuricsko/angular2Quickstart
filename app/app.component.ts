import { Component } from '@angular/core';

//components control views, which are portions of the screens with atemplate.
@Component({
    selector: 'my-app',//simple css selector for html element thtat can represent the component
    template: '<h1>template inside a component</h1>'//template says how to render the view
})

export class  AppComponent {}
