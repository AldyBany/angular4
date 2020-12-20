import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  user = 'hello'
  users = ['al','smith','paul']
  names = [
    {
      id: '1',
      name: 'peter',
      age: 24
    },
    {
      id: '2',
      name: 'alain',
      age: 28
    },
    {
      id: '3',
      name: 'red',
      age: 23
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
