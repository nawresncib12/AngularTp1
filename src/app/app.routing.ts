import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { CvComponent } from './cv/cv.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { DetailComponent } from './cv/detail/detail.component';
import { HomeComponent } from './home/home.component';
import { ThirdComponent } from './third/third.component';
import { VisitCardComponent } from './visit-card/visit-card.component';

const APP_ROUTING: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cv/:id',
    component: DetailCvComponent,
  },
  {
    path: 'cv',
    component: CvComponent,
  },

  {
    path: 'visitCard',
    component: VisitCardComponent,
  },
  {
    path: 'third',
    component: ThirdComponent,
  },
  {
    path: 'color',
    component: ColorComponent,
  },
];
export const ROUTING = RouterModule.forRoot(APP_ROUTING);
