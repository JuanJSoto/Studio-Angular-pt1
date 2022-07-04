import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentNameComponent } from './component-name/component-name.component';
import { TaskListComponent } from './task-list/task-list.component';
import { HeaderComponent } from './header/header.component';
import { InsideTaskListComponent } from './inside-task-list/inside-task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentNameComponent,
    TaskListComponent,
    HeaderComponent,
    InsideTaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
