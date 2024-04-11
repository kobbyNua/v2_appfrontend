import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import {FormGroup,FormControl,FormArray,Validators} from '@angular/forms';
@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent {

  regions:any;
  response:any;
  region_forms:any;
  constructor(private api:SettingsService){
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
  //this.api.createRegion(this.region_forms.value).subscribe(data=>{console.log(data)},error=>{console.warn(error)})
  //console.log(regionsForm)
}




}
