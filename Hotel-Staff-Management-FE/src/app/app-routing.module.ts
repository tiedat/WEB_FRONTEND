import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
    {
        path: 'staffs',
        loadChildren: () => import('./staffs/staffs.module').then(m => m.StaffsModule)
    },
    {
        path: 'departments',
        loadChildren: () => import('./departments/departments.module').then(m => m.DepartmentsModule)
    },
    {
        path: 'home',
        component: HomepageComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)],
    exports:
        [RouterModule]
})

export class AppRoutingModule {
}
