import { Component } from '@angular/core';
import { SimpleComponent } from './src/simple.component';

@Component({
  selector: 'my-app',
  template: `<div>How does star component look like</div>
             <simple-component></simple-component>`
})

export class AppComponent {

    constructor() {
        let abba: number = 90;
    }
}