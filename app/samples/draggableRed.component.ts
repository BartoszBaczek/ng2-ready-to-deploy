import { Component, OnInit, ViewChild } from '@angular/core';
import { IDraggable } from '../interfaces/draggable.interface';
import { DraggableDirective } from '../lib/draggable.directive';

@Component({
  selector: 'draggable-red',
  template: `
            <div draggable class="red-component centered-div">
                <h1>Draggable component</h1>
            </div>`,
  styles: [`.red-component {
                height: 300px;
                background-color: red;
            }
            .centered-div {
                display: flex;
                justify-content: center;
                align-items:center;
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