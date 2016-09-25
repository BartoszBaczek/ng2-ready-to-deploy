import { Component } from '@angular/core';
import { DraggableRedComponent } from './samples/draggableRed.component';

@Component({
  selector: 'my-app',
  template: `<div>Simple component below:</div>
             <simple-component></simple-component>`
})

export class AppComponent {

    constructor() { }
}