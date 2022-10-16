import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tp1';
  active = 0;
  changeActive(num: number) {
    this.active = num;
  }
}
