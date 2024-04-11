import { Component } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
    total_users:any;
    constructor(private api:SettingsService){
       // this.totalHospitalStaff()
    }

    //totalHospitalStaff=()=>this.api.totalUsers().subscribe(data=>{this.total_users=data,console.warn(data)})
}
