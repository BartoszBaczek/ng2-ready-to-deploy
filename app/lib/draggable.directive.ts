import { Directive, ElementRef, Renderer, OnInit, OnDestroy, Inject  } from '@angular/core';
import { IDraggable } from '../interfaces/draggable.interface';

@Directive({
    selector: '[draggable]',
    host: {
        '(drag)': 'onDrag($event)',
        '(dragend)': 'onDragEnd($event)',
        '(dragstart)': 'onDragStart($event)'
    }
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

    private onDragStart(event: MouseEvent) {

        for (let o of this.dragObservers) {
            o.onDragStart(event);
        }
    }

    private onDrag(event: MouseEvent) {

        for (let o of this.dragObservers) {
            o.onDrag(event);
        }
    }

    private onDragEnd(event: MouseEvent) {

        for (let o of this.dragObservers) {
            o.onDragEnd(event);
        }
    }
}