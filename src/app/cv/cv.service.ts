import { Injectable } from '@angular/core';
import { Cv } from '../Model/Cv';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  cvList: Cv[] = [
    new Cv(1, 'taher', 'Plumber', 'taher', 55, 9525784),
    new Cv(
      2,
      'nadine',
      'Witch',
      'Nadine',
      26,
      8856936,
      'assets/images/wolf.jpg'
    ),
  ];
  constructor() {}
  getCvById(id: number): Cv {
    var res = this.cvList.find((cv) => {
      return cv.id == id;
    });
    if (res) return res;
    else {
      return new Cv(0, 'unkown', 'unkown', 'unkown', 11, 11111111);
    }
  }
}
