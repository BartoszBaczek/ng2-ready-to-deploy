import { Component, OnInit, ViewChild } from '@angular/core';
import { IDraggable } from '../interfaces/draggable.interface';
import { DraggableDirective } from '../lib/draggable.directive';

@Component({
  selector: 'draggable-red',
  template: `<div draggable class="simple-component">
                <div>Simple component</div>
            </div>`,
  styles: [`.simple-component {
                width: 100px;
                height: 100px;
                background-color: yellow;
            }`]
})

export class DraggableRedComponent implements IDraggable {

    @ViewChild(DraggableDirective) draggableDirective: DraggableDirective;

    constructor() { }

    ngOnInit() {

        this.draggableDirective.subscribeToDragEvents(this);
    }

    onDragStart(event: MouseEvent) {

        console.log('dragStarted');
    }

    onDrag(event: MouseEvent) {

        console.log('drag');
    }

    onDragEnd(event: MouseEvent) {

        console.log('dragEnded');
    }
}