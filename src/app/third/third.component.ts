import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css'],
})
export class ThirdComponent implements OnInit {
  constructor() {}
  bgColor = 'pink';
  ngOnInit(): void {}
  changeColor(color: any) {
    this.bgColor = color;
  }
  resetColor() {
    this.bgColor = 'pink';
  }
}
