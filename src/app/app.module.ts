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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ToastrModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
