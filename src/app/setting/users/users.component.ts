import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SettingsService } from 'src/app/services/settings.service';
import { FormGroup,FormArray,FormControl,NgForm } from '@angular/forms';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
   groups:any
   staffs:any 
   staff_forms:any;
   
   constructor(private api:SettingsService){

   }
   ngOnInit(){}




}
