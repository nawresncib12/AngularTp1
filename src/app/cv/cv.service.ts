import { Injectable } from '@angular/core';
import { Cv } from '../Model/Cv';

@Injectable({
  providedIn: 'root'
})

export class CvService {
  cvList: Cv[] = [
    new Cv(1, "taher", "Plumber", "taher", 55, 9525784, 'assets/images/lama.jpg'),
    new Cv(2, "nadine", "Witch", "Nadine", 26, 8856936, 'assets/images/wolf.jpg')
  ]
  constructor() {

  }
}
