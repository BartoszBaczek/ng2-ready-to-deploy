import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { DraggableRedComponent } from './samples/draggableRed.component';
import { DraggableDirective } from './lib/draggable.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, DraggableRedComponent, DraggableDirective ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
