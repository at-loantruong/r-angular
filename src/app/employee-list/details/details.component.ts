import { Component,  OnInit, Input } from '@angular/core';
import { Employee } from '../../employee';
import { EMPLOYEES } from '../../mock-employees';

@Component({
  selector: 'employee-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class EmployeeDetailsComponent implements OnInit {
  employees = EMPLOYEES;
  @Input('selectedEmp') selectedEmp;
  @Input('select') isSelected: any;
  @Input('detail') detail: any;
  @Input('same') same: any;

  constructor() {
  }

  ngOnInit() {

  }

}
