import { Component, OnInit, Input, Output, EventEmitter, NgZone } from '@angular/core';

@Component({
  selector: 'angular-elements-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Output() addTodoEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() removeTodoEmitter: EventEmitter<any> = new EventEmitter<any>();


  newTodo = '';
  todos = [];
  constructor(private ngZone: NgZone) {}

  addTodo() {
    const newTodo = {
      title: this.newTodo.trim(),
      completed: false
    };

    if (!newTodo.title) {
      return;
    }

    this.pushTodoItem(newTodo);
    this.addTodoEmitter.emit(newTodo);
    this.newTodo = '';
  }
  @Input() public pushTodoItem = todo => {
    this.ngZone.run(() => {
      this.todos.push(todo);
    });
  };

  @Input() public deleteTodoItem = todo => {
    this.ngZone.run(() => {
      this.todos = this.todos.filter(t => t.title !== todo.title);
    });
  };

  toggle() {}

  delete(todo) {
    this.removeTodoEmitter.emit(todo);
    this.todos = this.todos.filter(t => t.title !== todo.title);
  }

  ngOnInit() {}
}
