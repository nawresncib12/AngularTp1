import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from 'src/app/Model/Cv';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() cv: Cv = new Cv();
  constructor(private cvService: CvService) {}

  ngOnInit(): void {}
  onClick() {
    this.cvService.cv.next(this.cv);
  }
}
