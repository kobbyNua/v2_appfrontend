import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  base_url:string="http://127.0.0.1:8000/agadarko/";
  //base_url="http://192.168.43.246:8000/agadarko/"
  headers={'Content-Type':'application/json'}
  constructor(private http:HttpClient) { }

  /**
   * 
   * staff/user account creation,viewing and editing account 
   */
  viewAllStaff=()=>{
    return this.http.post(this.base_url+'view-staffs/',{headers:this.headers})
  }

  getStaff=(username:any):Observable<any>=>{
       return this.http.get(this.base_url+'view-staff-details/'+username,{headers:this.headers})
  }
  createStaff=(body:any):Observable<any>=>{
    
    return this.http.post(this.base_url+'create-new-staffs/',body,{headers:this.headers})
  }

  editUsers=(body:any):Observable<any>=>{
    return this.http.post(this.base_url+'edit-staff-info/',body,{headers:this.headers})
  }

  totalUsers=():Observable<any>=>this.http.post(this.base_url+'view-total-staff/',{headers:this.headers})
  /**
   * creating,viewing and editing groups
   */
  viewAllGroups=()=>{
    return this.http.get(this.base_url+'view-all-groups/',{headers:this.headers})
  }
  getGroups=()=>{

  }
  editGroups=()=>{

  }
  createGroups=(body:any):Observable<any>=>{
    return this.http.post(this.base_url+'create-user-groups/',body,{headers:this.headers})
  }
  viewOPDVitals=()=>{
    return this.http.get(this.base_url+'view-all-opd-vitals/',{headers:this.headers})
  }

  editOPDVitals=()=>{

  }
  getOPDVitals=()=>{
    
  }
  createOPDVitals=(body:any):Observable<any>=>{
    return this.http.post(this.base_url+"create-opd-vital/",body,{headers:this.headers})
  }


  viewRegion=()=>{
    return this.http.get(this.base_url+'view-region/',{headers:this.headers})
  }

  createRegion=(regions:any):Observable<any>=>{
    console.log(regions)
    const body={region:regions.region}
    console.log(body,'over here')
    return  this.http.post(this.base_url+'create-region/',body,{headers:this.headers})
 }

 viewHospitalDetails=()=>{
  return this.http.get(this.base_url+'view-all-hospitals/',{headers:this.headers})
 }

  createHospitalDetails=(hospital:any):Observable<any>=>{
           const body=hospital
           return this.http.post(this.base_url+'create-hospital-details/',body,{headers:this.headers})
  }

  getSuperUsers=()=>{
    return this.http.get(this.base_url+'all-super-user/',{headers:this.headers})
 }


}
