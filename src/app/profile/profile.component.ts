import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../visit-card/Model/Person';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @Input() person: any;
  constructor() {}

  ngOnInit(): void {}
}
