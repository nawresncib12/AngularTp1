import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmbaucheServiceService } from '../embauche-service.service';

@Component({
  selector: 'app-liste-embauche',
  templateUrl: './liste-embauche.component.html',
  styleUrls: ['./liste-embauche.component.css'],
})
export class ListeEmbaucheComponent implements OnInit {
  cvList: any = [];
  constructor(
    private embaucheService: EmbaucheServiceService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.embaucheService.listEmbauche.subscribe((response: any) => {
      if (this.cvList.indexOf(response) == -1) {
        this.cvList.push(response);
      } else {
        this.toastr.error('Error', 'Profile already recruited');
      }
    });
  }
}
