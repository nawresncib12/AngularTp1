import { Component, OnInit } from '@angular/core';
import { Person } from '../Model/Person';

@Component({
  selector: 'app-visit-card',
  templateUrl: './visit-card.component.html',
  styleUrls: ['./visit-card.component.css'],
})
export class VisitCardComponent implements OnInit {
  person: Person;
  constructor() {
    this.person = new Person(
      'ncib',
      'nadine',
      'software engineer',
      'lama',
      'The lone wolf dies but the pack survives',
      'Lorem ipsum dolor sit amet. Sed expedita magni et distinctio earum rem deleniti officiis eos neque quia',
      'React Angular Gitlab Docker'
    );
  }

  ngOnInit(): void { }
}
