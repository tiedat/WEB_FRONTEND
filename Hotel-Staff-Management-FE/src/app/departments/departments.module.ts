import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DepartmentsRoutingModule} from './departments-routing.module';
import {DepartmentsComponent} from './departments.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import {DepartmentService} from './department.service';


@NgModule({
    declarations: [DepartmentsComponent, EditComponent, CreateComponent],
    imports: [
        CommonModule,
        DepartmentsRoutingModule,
        ReactiveFormsModule
    ],
    providers: [DepartmentService]
})
export class DepartmentsModule {
}
