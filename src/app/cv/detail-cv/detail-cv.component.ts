import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cv } from 'src/app/Model/Cv';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
})
export class DetailCvComponent implements OnInit {
  cv: Cv = new Cv(0, 'unkown', 'unkown', 'unkown', 11, 11111111);
  constructor(
    private cvService: CvService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.cv = this.cvService.getCvById(params['id']);
    });
  }
  deletecv() {
    this.cvService.removeCvById(this.cv.id);
    const link = ['cv'];
    this.router.navigate(link);
  }
}
