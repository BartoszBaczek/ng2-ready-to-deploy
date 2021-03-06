import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }   from './app.component';
import { DraggableRedComponent } from './samples/draggableRed.component';
import { DroppableGreenComponent } from './samples/droppableGreen.component';

import { DraggableDirective } from './lib/draggable.directive';
import { DroppableDirective } from './lib/droppable.directive';


@NgModule({
  imports:      [ BrowserModule, NgbModule ],
  declarations: [ AppComponent, DraggableRedComponent, DroppableGreenComponent, DraggableDirective, DroppableDirective ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
