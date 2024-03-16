import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TwoWayBindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
