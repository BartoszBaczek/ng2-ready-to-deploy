import { Directive, ElementRef, Renderer, Inject, HostListener  } from '@angular/core';
import { IDroppable } from '../interfaces/droppable.interface';

@Directive({
    selector: '[droppable]',
})
export class DroppableDirective {

    private dropObservers: Array<IDroppable>;

    constructor(@Inject(ElementRef) private elementRef: ElementRef, @Inject(Renderer) private renderer: Renderer) {

        this.dropObservers = new Array<IDroppable>();
    }

    subscribeToDropEvents(observer: IDroppable) {

        if (this.dropObservers.indexOf(observer) <= -1) {    // contains??
            this.dropObservers.push(observer);
        }
    }

    @HostListener('dragenter', ['$event'])
    onDragEnter(event: MouseEvent) {

        event.preventDefault();

        for (let o of this.dropObservers) {
            o.onDragEnter(event);
        }
    }

    @HostListener('dragleave', ['$event'])
    onDragLeave(event: MouseEvent) {

        for (let o of this.dropObservers) {
            o.onDragLeave(event);
        }
    }

    @HostListener('dragover', ['$event'])
    onDragOver(event: MouseEvent) {

        event.preventDefault();

        for (let o of this.dropObservers) {
            o.onDragOver(event);
        }
    }

    @HostListener('drop', ['$event'])
    onDrop(event: MouseEvent) {

        event.stopPropagation();

        for (let o of this.dropObservers) {
            o.onDrop(event);
        }
    }
}