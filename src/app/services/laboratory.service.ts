import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaboratoryService {

  base_url="http://127.0.0.1:8000/agadarko/"
  //base_url="http://192.168.43.246:8000/agadarko/"
  headers={"Content-Type":'application/json'}

  constructor(private http:HttpClient) {
       
   }
   
   viewLabTestList=()=>this.http.get(this.base_url+'view-laboratory-list/',{headers:this.headers})

       createLabTestDetails=(data:any):Observable<any>=>{
        let test:any=[]
        let price:any=[]
        for(let i=0;i<data.length;i++){
            test.push(data[i].lab_test)
            price.push(data[i].lab_price)
        }
        const body={'lab_test':test,'price':price}
        return this.http.post(this.base_url+"create-laboratory-test-details/",body,{headers:this.headers})
    }

    labdetails=(id:any):Observable<any>=>this.http.post(this.base_url+'view-laboratory-test-details/'+id,{headers:this.headers})

    editLab=(body:any):Observable<any>=>this.http.post(this.base_url+'edit-laboratory-details/',body,{headers:this.headers})

    waitingPatientLabTest=()=>this.http.post(this.base_url+'view-all-waiting-patient-laboratory/',{headers:this.headers})

    getLabPatientLabDetails=(case_number:any):Observable<any>=>{
      return  this.http.post(this.base_url+'patient-laboratory-records/'+case_number,{headers:this.headers});console.log(case_number)
    }

    submitLaboratory=(body:any):Observable<any>=>this.http.post(this.base_url+'interperate-patient-lab-details/',body,{headers:this.headers})


}
