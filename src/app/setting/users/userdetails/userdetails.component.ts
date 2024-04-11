import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormGroup,FormControl,NgForm} from "@angular/forms"
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {
   
       editStaffForms:any
       response:any;
       first_name:any;
       last_name:any;
       username:any;
       telephone:any;
       staff_id:any;
       user_id:any;
       email:any;

       constructor(private rout:ActivatedRoute,private api:SettingsService){
          this.staff_forms()
       }

       ngOnInit(){
           this.rout.paramMap.subscribe(params=>{this.viewStaff(params.get('username'))})
       }

 
       

       viewStaff=(username:any)=>{
        //this.get_staff=this.activeroute.snapshot.paramMap.get('username')
        //this.apiCalls.getStaff(this.get_staff).subscribe(data=>{this.staff=data},error=>{console.warn(error)})
          this.api.getStaff(username).subscribe(
            //data=>console.log(data,'hello world')
            data=>{
              this.first_name=data.first_name
              this.last_name=data.last_name
              this.username=data.username
              this.email=data.email
              this.telephone=data.telephone
              this.staff_id=data.staff_id
              this.user_id=data.user_id
            }
          )
            /* console.log(data)
             this.editStaffForms.patchValue({
                first_name:new FormControl(data.first_name),
                last_name:new FormControl(data.last_name),
                username:new FormControl(data.username),
                email:new FormControl(data.email),
                telephone:new FormControl(data.telephone),
                staff_id:new FormControl(data.staff_id),
                user_id:new FormControl(data.user_id)
              });
              
          }),*/
          
        
        }
        staff_forms=()=>{
             this.editStaffForms=new FormGroup({
                 first_name:new FormControl(),
                 last_name:new FormControl(),
                 username:new FormControl(),
                 email:new FormControl(),
                 telephone:new FormControl(),
                 staff_id:new FormControl(),
                 user_id:new FormControl()

             })
        }

        editStaffInfo=(forms:NgForm)=>{
          console.log(forms.value,' hello world ')
          //this.api.editUsers(forms.value).subscribe(data=>{this.response=data})
        }

        /**
         * 
         * reset password and change password, edit password
         * 
         */

}
