import { Component,  OnInit, Input } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';
@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  employees = EMPLOYEES;
  constructor() {
    //
  }

  ngOnInit() {

  }

}
