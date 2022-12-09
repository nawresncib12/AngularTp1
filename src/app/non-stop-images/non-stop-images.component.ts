import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-non-stop-images',
  templateUrl: './non-stop-images.component.html',
  styleUrls: ['./non-stop-images.component.css'],
})
export class NonStopImagesComponent implements OnInit {
  obs: Observable<string> | undefined;
  images = ['cat.jpg', 'lama.jpg', 'wolf.jpg'];
  image: string = 'cat.jpg';
  constructor() {}

  ngOnInit(): void {
    this.obs = new Observable((observer) => {
      let i = this.images.length - 1;
      setInterval(() => {
        observer.next(this.images[i]);
        if (i > 0) {
          i--;
        } else {
          i = this.images.length - 1;
        }
      }, 2000);
    });
    this.obs.subscribe((result) => {
      this.image = result;
    });
  }
}
