import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  base_url:string="http://127.0.0.1:8000/agadarko/"
  //base_url="http://192.168.43.246:8000/agadarko/"
  headers:any={'Content-Type':'application/json'}
  constructor(private http:HttpClient) { }

  createPatientDetails=(body:any):Observable<any>=>this.http.post(this.base_url+'create-patient-medical-bio-info/',body,{headers:this.headers})

  searchPatient=(search:any):Observable<any>=>this.http.post(this.base_url+"patients-search/",{'search':search},{headers:this.headers})

  patient_opd_info=(card_number:any):Observable<any>=>this.http.post(this.base_url+'patient-opd-information/'+card_number,{headers:this.headers})

  get_patient_case_number=(card_number:any):Observable<any>=>this.http.post(this.base_url+'get-patient-case-number/'+card_number,{headers:this.headers})

  make_pyement=(body:any):Observable<any>=>this.http.post(this.base_url+'card-payment/',body,{headers:this.headers})

  patient_opd_vital_results=(data:any,case_number:any):Observable<any>=>{
      let vital_serial_code=[]
      let vital_results_serial_code=[]
      for(let index=0;index<data.length;index++){
        vital_serial_code.push(data[index].vital_serial_code)
        vital_results_serial_code.push(data[index].result)
      }
      
      let body={'serial_code':vital_serial_code,'result':vital_results_serial_code,'case_number':case_number}
      
      return this.http.post(this.base_url+'create-patient-opd-vital-info/',body,{headers:this.headers})

      
  }

  patientLaboratoryPayment=(body:any):Observable<any>=>this.http.post(this.base_url+'patient-lab-payment/',body,{headers:this.headers})


  generate_new_case=(body:any):Observable<any>=>this.http.post(this.base_url+'generate-new-case/',body,{headers:this.headers})


  patientOpdHistoryDetails=(case_number:any):Observable<any>=>this.http.post(this.base_url+'get-patient-opd-history_details/'+case_number,{headers:this.headers})

}
