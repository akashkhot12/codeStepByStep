import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';
import { PipesComponent } from './pipes/pipes.component';
import { TemplatesFormsComponent } from './forms/templates-forms/templates-forms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { DirectivesComponent } from './directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TwoWayBindComponent,
    PipesComponent,
    TemplatesFormsComponent,
    ReactiveFormComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
