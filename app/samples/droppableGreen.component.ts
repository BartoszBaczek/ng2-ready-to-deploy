import { Component, OnInit, ViewChild } from '@angular/core';
import { IDroppable } from '../interfaces/droppable.interface';
import { DroppableDirective } from '../lib/droppable.directive';

@Component({
  selector: 'droppable-green',
  template: `
            <div droppable class="green-component centered-div">
                <h1>Droppable component</h1>
            </div>`,
  styles: [`.green-component {
                height: 300px;
                background-color: green;
            }
            .centered-div {
                display: flex;
                justify-content: center;
                align-items:center;
            }`]
})

export class DroppableGreenComponent implements IDroppable {

    @ViewChild(DroppableDirective) droppableDirective: DroppableDirective;

    constructor() { }

    ngOnInit() {

        this.droppableDirective.subscribeToDropEvents(this);
    }

    onDragEnter(event: MouseEvent) {

        console.log('dragEntered');
    }

    onDragLeave(event: MouseEvent) {

        console.log('dragLeft');
    }

    onDrop(event: MouseEvent) {

        console.log('drop!');
    }

    onDragOver(event: MouseEvent) {

        console.log('dragOver');
    }
}