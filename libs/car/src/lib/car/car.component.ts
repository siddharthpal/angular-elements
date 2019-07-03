import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'angular-elements-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor() { }

  @Input() name: string;
  ngOnInit() {
  }

}
