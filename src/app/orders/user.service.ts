import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urllink : string = "https://reqres.in/api/users?page=2";
  constructor(private http: HttpClient) { }
  getuser(){
    return this.http.get(this.urllink);
  }
}
