import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from 'src/app/Model/Cv';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() cv: Cv = new Cv()
  @Output() clicked = new EventEmitter<Cv>()
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.clicked.emit(this.cv)
  }
}
