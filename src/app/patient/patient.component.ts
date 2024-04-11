import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {FormGroup,FormControl,FormArray,NgForm,Validators, FormGroupDirective} from "@angular/forms";
import { PatientService } from '../services/patient.service';
import { SettingsService } from '../services/settings.service';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {

  create_Patient_Details:any
  region:any;
  get_card_number:any;
  
  patient_search:any;
  status:string="";
  message:string="";
 constructor(private activeroute:ActivatedRoute,private patientApi:PatientService,private settingApi:SettingsService,private route:Router){
  
   this.submitPatientForms()
   this.getRegion()
   //this.get_Info()

 }
 
 searchPatient=(search:any)=>this.patientApi.searchPatient(search.control.value).subscribe(data=>this.patient_search=data)

 createPatientDetails=()=>{
          
 }

 getRegion=()=>this.settingApi.viewRegion().subscribe(data=>{this.region=data})

 submitPatientForms=()=>{
   this.create_Patient_Details=new FormGroup({
       first_name:new FormControl('',[Validators.required]),
       last_name:new FormControl("",[Validators.required]),
       telephone:new FormControl("",[Validators.required,Validators.minLength(10)]),
       date_of_birth:new FormControl("",[Validators.required]),
       region:new FormControl("",[Validators.required]),
   })
 
 }

 createPatientOpdDetails=(myForms:FormGroupDirective)=>{
       console.log(myForms)
       //if(myForms.valid){
         //console.log(myForms.value)
      

        
       //}

       if(myForms.submitted){
         if(myForms.valid){
          this.patientApi.createPatientDetails(this.create_Patient_Details.value).subscribe(data=>{
            this.status=data.status;this.message=data.message;
    
          });
          window.location.href=this.route.url;
         }
        //this.route.navigate(['/patient-opd'])
      }
       //var hello;
       //console.log(this.create_Patient_Details, 'helloo world ')
       //let statuses:any="";
       //let message="";
       /*this.patientApi.createPatientDetails(this.create_Patient_Details.value).subscribe(data=>{
       // this.get_card_number=[data.card_number]
          this.status+=data.status;
          this.message+=data.message;
          statuses+=data.status;*/
          //console.log(data,' get logged')
         /* if(data.status == "success" ){
            this.route.navigate(['/patient-opd'])
          }*/
         
          
      // })
       // console.log(statuses, typeof statuses)
       //f(statuses == "success"){
          // this.route.navigate(['./'])
       //}
       //return this.route.navigate(['/patient-opd-detail',{"card_number":this.get_card_number}])
 }
 //get_Info=()=>console.log(this.get_card_number)

 








}
