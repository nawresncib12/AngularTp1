import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmbaucheServiceService } from 'src/app/embauche-service.service';
import { Cv } from 'src/app/Model/Cv';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() cv: Cv = new Cv();
  constructor(
    private embaucheService: EmbaucheServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  ajouterEmbauche = () => {
    this.embaucheService.listEmbauche.next(this.cv);
  };
  more() {
    const link = ['cv', this.cv.id];
    this.router.navigate(link);
  }
}
