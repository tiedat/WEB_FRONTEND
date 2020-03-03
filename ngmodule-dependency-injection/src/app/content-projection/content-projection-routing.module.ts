import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ContentProjectionComponent} from './content-projection.component';
import {pathToFileURL} from 'url';
import {CpCardComponent} from './cp-card/cp-card.component';

const routes: Routes = [
  {path: '', component: ContentProjectionComponent},
  {path: 'cp-card', component: CpCardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentProjectionRoutingModule {
}
