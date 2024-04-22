import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { FormGroup,FormControl,NgForm,FormArray,Validators} from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent {


  group:any;
  groups_forms:any
  group_response:any;
  constructor(private api:SettingsService,private router:Router){
    this.groupsForm();
    this.viewAllGroups();
  }

 viewAllGroups=()=>{
   this.api.viewAllGroups().subscribe(data=>{this.group=data})
 }
 createGroups=()=>{
        //console.log(this.groups_forms)
        this.api.createGroups(this.groups_forms.value).subscribe(data=>{
          
          //console.log(data)},data=>{console.warn(data)
          if(data.status == 'success'){
            this.group_response=data.success;
            window.location.href=this.router.url;
          }
          else if(data.status == 'error'){
             this.group_response=data.error;
          } 

        })
 }
 groupsForm=()=>{
    this.groups_forms=new FormGroup({
          groups:new FormArray([
                new FormControl('',Validators.required)
          ])
    })
 }
 addGroup=()=>{
      this.groups_forms.get('groups')['controls'].push(new FormControl(''))
      //console.log(this.groups_forms.get('groups')['controls'].length)
 }
 removeGroup=(index:number)=>{
   if(this.groups_forms.get('groups')['controls'].length!=1){
      this.groups_forms.get('groups').removeAt(index)
   } 
  
 }

 /**edit group name */
}
