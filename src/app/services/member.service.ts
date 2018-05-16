import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { Employee } from "../employee";

 @Injectable()
 export class MembersService {

  private _memberURL = 'assets/data/member.json';
  constructor (private http: HttpClient) {

  }

  public getList() {
    return this.http.get(this._memberURL);
  }

 }
