import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { Employee } from "../employee";
import { map } from 'rxjs/operators';

 @Injectable()
 export class MembersService {
  listMembers;
  private memberURL = 'assets/data/member.json';

  constructor (private http: HttpClient) {

  }

  public getList() {
    return this.http.get(this.memberURL);
  }

  public getDetails(list: any, code: any) {
    return list.find(member => member.code === code);
  }
  public getSameMember(list: any, position: any) {
    return list.filter(member => member.position === position);
  }

 }
