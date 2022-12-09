import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { CvComponent } from './cv/cv.component';
import { DeleteCvComponent } from './cv/delete-cv/delete-cv.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ThirdComponent } from './third/third.component';
import { VisitCardComponent } from './visit-card/visit-card.component';

const APP_ROUTING: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      {
        path: 'delete/:id',
        component: DeleteCvComponent,
      },
      {
        path: 'add',
        component: AddCvComponent,
      },
      {
        path: ':id',
        component: DetailCvComponent,
      },
    ],
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
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];
export const ROUTING = RouterModule.forRoot(APP_ROUTING);
