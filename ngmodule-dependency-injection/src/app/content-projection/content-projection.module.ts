import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentProjectionRoutingModule } from './content-projection-routing.module';
import { ContentProjectionComponent } from './content-projection.component';
import { CpCardComponent } from './cp-card/cp-card.component';


@NgModule({
  declarations: [ContentProjectionComponent, CpCardComponent],
  exports: [
    CpCardComponent
  ],
  imports: [
    CommonModule,
    ContentProjectionRoutingModule
  ]
})
export class ContentProjectionModule { }
