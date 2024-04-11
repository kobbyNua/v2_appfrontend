import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplementsService {

  base_url:string="http://127.0.0.1:8000/agadarko/";
  //base_url="http://192.168.43.246:8000/agadarko/";
  headers={'Content-Type':'application/json'}
  constructor(private http:HttpClient) { }



  viewDietarySupplement=():Observable<any>=>{
      return this.http.post(this.base_url+'view-dietary-supplement/',{header:this.headers})
  }

  viewUrgentSupplement=():Observable<any>=>{
     return this.http.post(this.base_url+'stocking-needing-urgent-stocking/',{header:this.headers})
  }
  createSupplementDetail=(body:any):Observable<any>=>{
    const formdata=new FormData()
  
    formdata.append('dietary_supplement',body.dietary_supplement)
    formdata.append('price',body.price) 
    formdata.append('quantity',body.quantity) 
    formdata.append('photo',body.newFile,body.newFile.name) 
    console.log(formdata,'hello world')
    
    return this.http.post(this.base_url+'create-dietary-supplements-details/',formdata)
  }

  stockingDetailsHistory=(dietary_code:any):Observable<any>=>{
     return this.http.post(this.base_url+'dietary-stocking-history/'+dietary_code,{headers:this.headers})
  }
  supplementStockUpate=(body:any):Observable<any>=>{
      return this.http.post(this.base_url+'stock-dieatry-supplement/',body,{headers:this.headers})
  }
  dietaryInfo=(id:any):Observable<any>=>{
    return this.http.post(this.base_url+'deitary-supplement-details/'+id,{header:this.headers})
  }
  supplementUpdate=(body:any):Observable<any>=>this.http.post(this.base_url+'update-dietary-supplement-name/',body,{headers:this.headers})

  viewPatientWaitingInDispensary=():Observable<any>=>this.http.post(this.base_url+'patient-dispensary-list/',{headers:this.headers})

  getPatientSupplementList=(case_number:any):Observable<any>=>this.http.post(this.base_url+'patient-dietary-records/'+case_number,{headers:this.headers})

  patientDietarySupplement=(body:any):Observable<any>=>this.http.post(this.base_url+'patient-dispense-dietary-supplement/',body,{headers:this.headers})


  getDietarySupplement=(body:any):Observable<any>=>this.http.post(this.base_url+'get-filter-supplement-list/',{'serial':[body]},{headers:this.headers})

  customerSaleInventory=(body:any):Observable<any>=>this.http.post(this.base_url+'create-patient-dietary-supplement/',body,{headers:this.headers})

  DailySupplementReports=():Observable<any>=>this.http.post(this.base_url+'daily-supplements-sales/',{headers:this.headers})
  dailySupplementSalesDetails=(body:any):Observable<any>=>this.http.post(this.base_url+'daily-supplement-sales-report/',body,{headers:this.headers})

  generalSupplementReports=(body:any):Observable<any>=>this.http.post(this.base_url+'generate-general-sales-reports/',body,{headers:this.headers})

  SupplementSalesReport=(body:any):Observable<any>=>this.http.post(this.base_url+"general-supplement-sales-report/",body,{headers:this.headers})
  
}
