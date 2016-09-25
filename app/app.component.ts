import { Component } from '@angular/core';
import { DraggableRedComponent } from './samples/draggableRed.component';

@Component({
  selector: 'my-app',
  template: `<div>Simple component below:</div>
             <draggable-red></draggable-red>`
})

export class AppComponent {

    constructor() { }
}