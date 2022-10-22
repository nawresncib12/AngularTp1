import { Component, OnInit, Input } from '@angular/core';
import { Cv } from 'src/app/Model/Cv';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
@Input() cv:Cv=new Cv()
  constructor() { }

  ngOnInit(): void {
  }

}
