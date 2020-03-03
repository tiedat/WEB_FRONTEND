import { Injectable } from '@angular/core';
import {StaffsModule} from './staffs.module';

@Injectable({
  providedIn: StaffsModule
})
export class StaffService {

  constructor() { }
}
