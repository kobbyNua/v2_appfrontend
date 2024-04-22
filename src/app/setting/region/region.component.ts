import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import {FormGroup,FormControl,FormArray,Validators} from '@angular/forms';
import DataTables from 'datatables.net';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent {

  regions:any;
  response:any;
  region_forms:any;
  region_response:any;
 
  constructor(private api:SettingsService,private router:Router){
     this.viewAllRegions()
     this.regionForms()
  }

  viewAllRegions=()=>{
   this.api.viewRegion().subscribe(
     data=>{this.regions=data}
   )
   
}
regionForms=()=>{
  this.region_forms=new FormGroup({
       region:new FormControl('',Validators.required)
  })
}
createNewRegions=()=>{
  console.log(this.region_forms)
  console.log(this.region_forms.controls.region.invalid)
  this.api.createRegion(this.region_forms.value).subscribe(data=>{
    if(data.status == 'success'){
      this.region_response=data.success;
      window.location.href=this.router.url;
    }
    else if(data.status == 'error'){
       this.region_response=data.error;
    } 
  })
  //console.log(regionsForm)
}




}
