import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffsComponent } from './staffs.component';

const staffRoutes: Routes = [{ path: '', component: StaffsComponent }];

@NgModule({
  imports: [RouterModule.forChild(staffRoutes)],
  exports: [RouterModule]
})
export class StaffsRoutingModule { }
