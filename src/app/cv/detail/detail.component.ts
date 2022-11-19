import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmbaucheServiceService } from 'src/app/embauche-service.service';
import { Cv } from 'src/app/Model/Cv';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() cv: Cv = new Cv();
  constructor(private embaucheService: EmbaucheServiceService, private toastr: ToastrService) {}

  ngOnInit(): void {}
  ajouterEmbauche = () => {

    this.embaucheService.listEmbauche.next(this.cv);

  };
}
