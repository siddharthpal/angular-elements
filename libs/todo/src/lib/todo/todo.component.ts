import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'angular-elements-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  @Input() name: string;
  ngOnInit() {
  }

}
