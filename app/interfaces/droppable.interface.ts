export interface IDroppable {

    onDragEnter(event: MouseEvent);
    onDragOver(event: MouseEvent);
    onDragLeave(event: MouseEvent);
    onDrop(event: MouseEvent);
}