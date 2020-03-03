import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DepartmentService} from '../department.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

    department: any;
    id: number;
    message = '';
    isShow = false;
    isSuccess = true;

    formGroup = new FormGroup({
        departmentId: new FormControl(),
        departmentName: new FormControl(),
    });

    constructor(private departmentService: DepartmentService, private route: ActivatedRoute) {


    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const idSearch = Number(params.get('id'));
            this.departmentService.getDepartment(idSearch).subscribe(
                next => {
                    this.department = next;
                    this.formGroup.controls.departmentName.setValue(this.department.firstName);
                    this.id = Number(idSearch);
                }
            );
        });
    }

}
