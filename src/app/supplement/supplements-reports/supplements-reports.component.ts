import { Component } from '@angular/core';
import { SupplementsService } from 'src/app/services/supplements.service';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-supplements-reports',
  templateUrl: './supplements-reports.component.html',
  styleUrls: ['./supplements-reports.component.css']
})
export class SupplementsReportsComponent {
     supplement_report_forms:any
     supplement_list:any;
     reports_details:any;
     constructor(private api:SupplementsService){
        this.viewSupplementList()
        this.reportForms()
     }

     viewSupplementList=()=>this.api.viewDietarySupplement().subscribe(data=>{this.supplement_list=data})
     reportForms=()=>this.supplement_report_forms=new FormGroup({serial_code:new FormControl(),startDate:new FormControl(),endDate:new FormControl()})
     generateReports=()=>{
      let body={serial_code:this.supplement_report_forms.value.serial_code,start_date:this.supplement_report_forms.value.startDate,end_date:this.supplement_report_forms.value.endDate}
      //console.log(this.supplement_report_forms.value,body)
      this.api.SupplementSalesReport(body).subscribe(data=>this.reports_details=data)
    }

}
