import { Component, OnInit } from "@angular/core";
import { MembersService } from "../services/member.service";
import { Employee } from "../employee";

 @Component({
  selector: 'service-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
 })
 export class MemberComponent implements OnInit {
    data : any;
    members : any;
    selectedEmp = {}
    isSelected = false;
    code: any;
    detail: any;
    same: any;


    constructor (private memberSerivce: MembersService) { }

    getList(): void {
      this.memberSerivce.getList().subscribe(data => {
        this.members = data;
      });
    }

    onClick(emp): void {
      this.isSelected = true;
      this.detail  = this.memberSerivce.getDetails(this.members, emp.code);
      this.same = this.memberSerivce.getSameMember(this.members, emp.position);
    }

    ngOnInit() {
      this.getList();
    }

 }
