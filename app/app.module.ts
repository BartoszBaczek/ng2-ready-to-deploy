import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { DraggableRedComponent } from './samples/draggableRed.component';
import { DraggableDirective } from './lib/draggable.directive';


@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule ],
  declarations: [ AppComponent, DraggableRedComponent, DraggableDirective ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
