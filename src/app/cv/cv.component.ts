import { Component, OnInit } from '@angular/core';
import { Cv } from '../Model/Cv';
import { CvService } from './cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  currentCv: Cv = new Cv()
  cvList:Cv[]
  constructor(private cvService: CvService) { 
    this.cvList = this.cvService.cvList
  }
  ngOnInit(): void {
  }
  setCv(cv: Cv) {
    this.currentCv = cv
  }
}
