import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.css']
})
export class MyFirstComponentComponent implements OnInit {

  @Input()firstName: string;
  @Input()lastName: string;

  constructor() { }

  ngOnInit() {
  }

  public sayHello() {
      return 'Hello ' + this.firstName + ' ' + this.lastName;
  }
}
