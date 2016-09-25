import { Directive, ElementRef, Renderer, OnInit, OnDestroy, Inject, HostListener  } from '@angular/core';
import { IDraggable } from '../interfaces/draggable.interface';

@Directive({
    selector: '[draggable]',
})
export class DraggableDirective {

    private dragObservers: Array<IDraggable>;

    constructor(@Inject(ElementRef) private elementRef: ElementRef, @Inject(Renderer) private renderer: Renderer) {

        this.dragObservers = new Array<IDraggable>();
    }

    ngOnInit() {

        this.renderer.setElementAttribute(this.elementRef.nativeElement, 'draggable', 'true');
    }

    ngOnDestroy() {

        this.renderer.setElementAttribute(this.elementRef.nativeElement, 'draggable', 'false');
    }

    subscribeToDragEvents(observer: IDraggable) {

        if (this.dragObservers.indexOf(observer) <= -1) {    // contains??
            this.dragObservers.push(observer);
        }
    }

    @HostListener('drag', ['$event'])
    onDrag(event: DragEvent) {

        for (let o of this.dragObservers) {
            o.onDrag(event);
        }
    }

    @HostListener('dragstart', ['$event'])
    onDragStart(event: DragEvent) {

        event.stopPropagation();

        for (let o of this.dragObservers) {
            o.onDragStart(event);
        }
    }

    @HostListener('dragend', ['$event'])
    onDragEnd(event: DragEvent) {

        for (let o of this.dragObservers) {
            o.onDragEnd(event);
        }
    }
}