import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CaculatorCompomentComponent } from './caculator-component/caculator-compoment.component';
import { PetComponent } from './pet/pet.component';
import { CaculatorComponent } from './caculator/caculator.component';
import {FormsModule} from '@angular/forms';
import { ColorPikerComponent } from './color-piker/color-piker.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import {RouterModule} from '@angular/router';
import { RatingBarComponent } from './rating-bar/rating-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CaculatorCompomentComponent,
    PetComponent,
    CaculatorComponent,
    ColorPikerComponent,
    NameCardComponent,
    ProgressBarComponent,
    CountdownTimerComponent,
    RatingBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
