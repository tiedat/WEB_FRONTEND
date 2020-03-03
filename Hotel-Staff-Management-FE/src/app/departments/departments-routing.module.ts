import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DepartmentsComponent} from './departments.component';
import {EditComponent} from './edit/edit.component';

const depRoutes: Routes = [
    {
        path: '',
        component: DepartmentsComponent,
    },
    {
        path: ':id',
        component: EditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(depRoutes)],
    exports: [RouterModule]
})
export class DepartmentsRoutingModule {
}
