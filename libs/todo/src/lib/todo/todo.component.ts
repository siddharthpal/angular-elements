import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'angular-elements-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  newTodo = '';
  todos=[];
  constructor() {}

  addTodo() {
    const newTodo = {
      title: this.newTodo.trim(),
      completed: false
    };

    if (!newTodo.title) {
      return;
    }

    this.todos.push(newTodo);
    this.newTodo = '';
  }

  toggle(){

  }

  delete(todo) {
    
  }

  ngOnInit() {}
}
