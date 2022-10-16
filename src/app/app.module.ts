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

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    VisitCardComponent,
    ProfileComponent,
    FormComponent,
    ThirdComponent,
    ChildComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
