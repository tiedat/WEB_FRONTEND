import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DepartmentsModule} from './departments.module';


@Injectable()

export class DepartmentService {
    URL = 'http://localhost:8080/api/departments/';

    constructor(private httpClient: HttpClient) {
    }

    getDepartmentList(): Observable<any[]> {
        return this.httpClient.get<any[]>(this.URL);
    }

    createDepartment(id: number, name: string): Observable<any> {
        const department = {
            name
        };
        return this.httpClient.post<any>(this.URL, department);
    }

    deleteDepartment(id: number): Observable<any> {
        return this.httpClient.delete(this.URL + id);
    }

    updateDepartment(id: number, name: string): Observable<any> {
        const department = {
            id,
            name
        };
        return this.httpClient.put<any>(this.URL + id, department);
    }

    getDepartment(id: number): Observable<any> {
        return this.httpClient.get<any>(this.URL + id);
    }

    findDepartmentByName(name: string): Observable<any[]> {
        return this.httpClient.get<any[]>(this.URL + 'find?name=' + name);
    }
}
