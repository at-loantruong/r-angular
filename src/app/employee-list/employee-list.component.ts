import { Component,  OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEES } from '../mock-employees';
@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent {
  employees = EMPLOYEES;
  selectedEmp = {};
  isSelected = false;
  constructor() {
    //
  }

  ngOnInit() {

  }

  onClick(emp) {
    this.selectedEmp = emp;
    this.isSelected = true;
  }

}
