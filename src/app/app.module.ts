import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { VisitCardComponent } from './visit-card/visit-card.component';
import { ProfileComponent } from './profile/profile.component';
import { FormComponent } from './form/form.component';
import { ThirdComponent } from './third/third.component';
import { ChildComponent } from './child/child.component';
import { CvComponent } from './cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { DetailComponent } from './cv/detail/detail.component';
import { ItemComponent } from './cv/item/item.component';
import { DefaultImagePipe } from './default-image.pipe';
import { ListeEmbaucheComponent } from './liste-embauche/liste-embauche.component';
import { ToastrModule } from 'ngx-toastr';
import { ROUTING } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { DeleteCvComponent } from './cv/delete-cv/delete-cv.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { LoginComponent } from './login/login.component';
import { NonStopImagesComponent } from './non-stop-images/non-stop-images.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    VisitCardComponent,
    ProfileComponent,
    FormComponent,
    ThirdComponent,
    ChildComponent,
    CvComponent,
    ListComponent,
    DetailComponent,
    ItemComponent,
    DefaultImagePipe,
    ListeEmbaucheComponent,
    HeaderComponent,
    HomeComponent,
    RouterSimulatorComponent,
    DetailCvComponent,
    DeleteCvComponent,
    AddCvComponent,
    LoginComponent,
    NonStopImagesComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ToastrModule.forRoot(),ROUTING],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
