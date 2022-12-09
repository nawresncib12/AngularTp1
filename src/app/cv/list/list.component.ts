import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from 'src/app/Model/Cv';
import { CvService } from '../cv.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  @Input()cvList: Cv[] = []
  constructor() {
  }

  ngOnInit(): void {
  }

 
}
