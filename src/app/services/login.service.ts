import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  base_url="http://127.0.0.1:8000/agadarko/"
 // base_url="http://192.168.43.246:8000/agadarko/"
  headers={'Content-Type':'application/json'}
  constructor(private http:HttpClient) {
      
   }
   login=(body:any):Observable<any>=>this.http.post(this.base_url+'auth/',body,{headers:this.headers})
}
