import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  base_url="http://127.0.0.1:8000/agadarko/"
 // base_url="http://192.168.43.246:8000/agadarko/"
  headers={'Content-Type':'application/json'}
  constructor(private http:HttpClient) { }
  checkedInpatient=():Observable<any>=>this.http.post(this.base_url+'view-Checked-in-patient-list/',{headers:this.headers})

  patientDiagonsis=(case_number:any):Observable<any>=>this.http.post(this.base_url+'create-patient-medical-diagnosis/'+case_number,{headers:this.headers})

  getLabdetails=(body:any):Observable<any>=>this.http.post(this.base_url+'get-lab-test-list/',{'body':body},{headers:this.headers})
  

  getSupplement=(body:any):Observable<any>=>this.http.post(this.base_url+'get-dietary-supplement-list/',{'serial':body},{headers:this.headers})

  getPatientComplainst=(body:any):Observable<any>=>this.http.post(this.base_url+'patient-complains-medical-diagnosis/',body,{headers:this.headers})

  getDoctorDiangosis=(body:any):Observable<any>=>this.http.post(this.base_url+'patient-doctor-medical-diagnosis/',body,{headers:this.headers})

  submitLabTestRequest=(body:any):Observable<any>=>this.http.post(this.base_url+'patient-lab-test/',body,{headers:this.headers})
  
  submitDietaryRequest=(body:any):Observable<any>=>this.http.post(this.base_url+'prescribe-patient-dietary-supplement/',body,{headers:this.headers})

  patientMedicalDiagnosisHistory=(body:any):Observable<any>=>this.http.post(this.base_url+'medical-diagnosis-history-search/',body,{headers:this.headers})
   
  diagnosisHistory=(card_number:any):Observable<any>=>this.http.get(this.base_url+'medical-diagnosis-history-cases/'+card_number,{headers:this.headers})
}
