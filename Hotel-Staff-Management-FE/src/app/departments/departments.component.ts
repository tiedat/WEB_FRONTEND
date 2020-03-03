import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DepartmentService} from './department.service';

@Component({
    selector: 'app-departments',
    templateUrl: './departments.component.html',
    styleUrls: ['./departments.component.scss'],
})
export class DepartmentsComponent implements OnInit {

    departmentList: any[];
    message = '';
    isShow = false;
    isSuccess = true;
    departmentForm = new FormGroup({
        departmentName: new FormControl(),
    });

    constructor(
        private departmentService: DepartmentService
    ) {
    }

    ngOnInit(): void {
        this.departmentService.getDepartmentList().subscribe(next => {
            this.departmentList = next;
        });
    }

    public delete(id: number) {
        this.departmentService.deleteDepartment(id).subscribe(next => {
            this.isShow = true;
            this.message = 'Deleted !';
            this.departmentForm.reset();
        }, error => {
            this.isSuccess = false;
            this.isShow = true;
            this.message = 'Failed !';
            this.departmentForm.reset();
        });
    }

    public update(id: number) {
        this.departmentService.getDepartment(id).subscribe(next => {
            this.departmentList = next;
        });
    }

    public findByName() {
        const name = this.departmentForm.get('departmentName').value;
        this.departmentService.findDepartmentByName(name).subscribe(next => {
            this.departmentList = next;
        });
    }

    public trackByFn(index, item) {
        return item.id;
    }
}
