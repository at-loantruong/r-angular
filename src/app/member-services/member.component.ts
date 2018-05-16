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
    constructor (private memberSerivce: MembersService) {

    }

    getList(): void {
      this.memberSerivce.getList().subscribe(data => {
        this.members = data;
        console.log (data);
      });
    }

    ngOnInit() {
      this.getList();
    }

 }
