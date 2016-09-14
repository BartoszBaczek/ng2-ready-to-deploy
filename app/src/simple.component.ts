import { Component } from '@angular/core';

@Component({
  selector: 'simple-component',
  template: `<div class="simple-component">
                <div class="simple-text">Simple component</div>
            </div>`,
  styles: [`.simple-component {
                background-color: red;
            }
            .simple-text {
                color: blue;
            }`]
})

export class SimpleComponent {

    constructor() { }
}