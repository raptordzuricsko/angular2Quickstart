import { Component } from '@angular/core';
import { Puppy } from './puppy';



const puppies: Puppy[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

//components control views, which are portions of the screens with atemplate.
@Component({
    selector: 'my-app',//simple css selector for html element thtat can represent the component
    styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .puppies {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .puppies li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .puppies li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .puppies li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .puppies .text {
    position: relative;
    top: -3px;
  }
  .puppies .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],

    template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="puppies">
            <li *ngFor="let puppy of puppies">
                <span class="badge">{{puppy.id}}</span>{{puppy.name}}
            </li>
    </ul>
    <h2>{{puppy.name}} details!</h2>
    <div><label>id: </label>{{puppy.id}}</div>
    <div>
        <label>name: </label>
        <input [(ngModel)]="puppy.name" placeholder="name"/>{{puppy.name}}
    </div>
    `
    //*ngFor indicates that the li and it's children are a master template


    //ngModel/value binding no longer uses {{}} for two way databinding, but this new ngModel syntax
    //as per directional binding, the view still works with {{}}, the edit needs ngModel

    //template says how to render the view
    //curly braces inside template are the "interpolation" form of one way binding
    
})

export class AppComponent {
    title = 'Kennel';
    puppy: Puppy = {
        id: 1,
        name: 'Windstorm'
    }
    puppies = puppies;//get typing for free from constant

}
