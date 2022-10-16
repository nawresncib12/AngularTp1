import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() bgColor: any;
  myFavoriteColor = 'purple';
  @Output() sendData = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  sendColor() {
    this.sendData.emit(this.myFavoriteColor);
  }
}
