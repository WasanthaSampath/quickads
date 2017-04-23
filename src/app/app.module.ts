import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import{UserComponent} from './components/user.component';
import{IndexComponent} from './components/index.component';


import { routing }  from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule ],
  declarations: [ AppComponent, UserComponent, IndexComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
