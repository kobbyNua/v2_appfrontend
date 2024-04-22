import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import {FormControl,FormGroup,FormArray,Validators} from "@angular/forms";
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent {

  hospital_forms:any;
  hospital_details:any;
  response:any;
  regions:any
  superusers:any
  hospital_response:any;

   constructor(private api:SettingsService,private router:Router){
      this.viewAllRegions()
      this.hospitalForms()
      this.viewHospitalDetails()
      this.getSuperUser()
      
   }
   ngOnInit=()=>{}

   viewHospitalDetails=()=>{
     this.api.viewHospitalDetails().subscribe(data=>{this.hospital_details=data})
   }

   hospitalForms=()=>{
       this.hospital_forms=new FormGroup({
           hospital:new FormControl('',Validators.required),
           email:new FormControl('',Validators.required),
           telephone:new FormControl('',Validators.required),
           admin_telephone:new FormControl('',Validators.required),
           region:new FormControl(''),
           town:new FormControl('',Validators.required),
           
           superuser:new FormControl('')
       })
    }
    createHospitalDetails=()=>{
       //console.log(this.hospital_forms)
       this.api.createHospitalDetails(this.hospital_forms.value).subscribe(data=>{
        if(data.status == 'success'){
          this.hospital_response=data.success;
          window.location.href=this.router.url;
        }
        else if(data.status == 'error'){
           this.hospital_response=data.error;
        } 
        console.log(data)
      })
    }
    getHospitalDetails=()=>{
     
    }

    viewAllRegions=()=>{
     this.api.viewRegion().subscribe(
       data=>{this.regions=data}
   )

  
     
 }
 getSuperUser=()=>{
   this.api.getSuperUsers().subscribe(data=>{this.superusers=data;console.log('hist up',data)})
 }



}
