import { Component } from '@angular/core';
import { DraggableRedComponent } from './samples/draggableRed.component';
import { DroppableGreenComponent } from './samples/droppableGreen.component';

@Component({
  selector: 'my-app',
  template: `
  <div class="top-margin">
    <div class="col-md-6"><draggable-red></draggable-red></div>
    <div class="col-md-6"><droppable-green></droppable-green></div>
  </div>`,
  styles: [`.top-margin {
                margin-top: 20px;
            }`]
})

export class AppComponent {

    constructor() { }
}