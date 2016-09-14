import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { SimpleComponent } from './src/simple.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, SimpleComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
