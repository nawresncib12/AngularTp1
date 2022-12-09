import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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
    new Cv(
      3,
      'Nawres',
      'Chef',
      'Nawres',
      22,
      97856936,
      'assets/images/cat.jpg'
    ),
  ];
  cv = new Subject();
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
  addCv(cv: Cv): void {
    cv.id = this.cvList[this.cvList.length - 1].id + 1;
    this.cvList.push(cv);
  }
  removeCvById(id: number): void {
    var index = this.cvList.findIndex((el) => el.id == id);
    this.cvList[index].deleted = true;
  }
}
