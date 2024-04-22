import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import {FormGroup,FormControl,FormArray,Validators} from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-opd-vitals',
  templateUrl: './opd-vitals.component.html',
  styleUrls: ['./opd-vitals.component.css']
})
export class OpdVitalsComponent {

  opd_forms:any;
  response:any;
  opd_vitals:any

  constructor(private api:SettingsService,private router:Router){
     this.viewOPDDetails()
     this.OPDVitalsForms()
  }
 
  viewOPDDetails=()=>{
      this.api.viewOPDVitals().subscribe(data=>{this.opd_vitals=data})
  }

  createOPDVital=()=>{
       //console.log(this.opd_forms)
       this.api.createOPDVitals(this.opd_forms.value).subscribe(data=>{

        if(data.status == 'success'){
          this.response=data.success;
          window.location.href=this.router.url;
        }
        else if(data.status == 'error'){
           this.response=data.error;
        } 
        //this.response=data
      
      })
  }

  OPDVitalsForms=()=>{
     
     this.opd_forms=new FormGroup({
          opd_vitals:new FormArray([
              new FormControl('',Validators.required)
          ])

     })
  }
  addopdinputbox=()=>{
     this.opd_forms.get('opd_vitals').push(new FormControl())
  }
  removeInputBox=(id:number)=>{
    if(this.opd_forms.get('opd_vitals').length!=1){
      this.opd_forms.get('opd_vitals').removeAt(id)
    }
      
  }








}
