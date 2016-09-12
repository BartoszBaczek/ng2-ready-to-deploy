import { Component } from '@angular/core';
import { AnotherComponent } from './another.component';

@Component({
  selector: 'my-app',
  template: `<div>How does star component look like</div>
             <another-component></another-component>`
})

export class AppComponent {

    constructor() {
        let abba: number = 90;
    }
}