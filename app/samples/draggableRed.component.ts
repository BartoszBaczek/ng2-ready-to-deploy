import { Component } from '@angular/core';

@Component({
  selector: 'draggable-red',
  template: `<div class="simple-component">
                <div>Simple component</div>
            </div>`,
  styles: [`.simple-component {
                width: 100px;
                height: 100px;
                background-color: yellow;
            }`]
})

export class DraggableRedComponent {

    constructor() { }
}