import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  selectedUser: User;

  constructor(private http: HttpClient) { }

  postUser(user: User){
    return this.http.post(environment.apiBaseUrl + "/register",user);
  }


}
