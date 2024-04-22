import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup,FormArray,FormControl,NgForm } from '@angular/forms';



@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent {
     groups:any;
     staffs:any;
     staff_forms:any;
     response:any;

     constructor(private api:SettingsService,private router:Router){
       this.viewStaff()
       this.createStaffForms()
       this.viewGroups()
      
     }
     viewGroups=()=>{
      this.api.viewAllGroups().subscribe(data=>{this.groups=data;},error=>{console.warn(error)})
     }
     viewStaff=()=>{
       this.api.viewAllStaff().subscribe(data=>{this.staffs=data;},error=>{console.warn(error)})
       //console.log(this.staffs,'oks')
     }


     createStaffForms=()=>{
      this.staff_forms=new FormGroup({
               first_name:new FormControl(''),
               last_name:new FormControl(''),
                telephone:new FormControl(''),
               username:new FormControl(''),
               email:new FormControl(''),
               roles:new FormControl(''),
               super_user_state:new FormControl('')
  
  
  
         })
     }
  
     createStaff=()=>{
        //console.log(this.staff_forms.value)
        this.api.createStaff(this.staff_forms.value).subscribe(data=>{
            
          if(data.status == 'success'){
            this.response=data.success;
            window.location.href=this.router.url;
          }
          else if(data.status == 'error'){
             this.response=data.error;
          } 
        })
     }
}
