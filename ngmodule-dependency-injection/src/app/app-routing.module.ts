import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [{
  path: 'content-projection',
  loadChildren: () => import('./content-projection/content-projection.module').then(m => m.ContentProjectionModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
