
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { TodoComponent } from './todo/todo.component';
import { TodoModule } from './todo.module';

@NgModule({
    imports: [BrowserModule, TodoModule],
    entryComponents: [TodoComponent]
  })
  export class TodoWrapperModule {
    constructor(private injector: Injector) {
      const todoElement = createCustomElement(TodoComponent, {
        injector: this.injector
      });
      customElements.define('todo-root-angular-element', todoElement);
    }
  
    ngDoBootstrap() {}
  }