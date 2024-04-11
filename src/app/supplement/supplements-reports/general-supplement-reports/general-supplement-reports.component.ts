import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { SupplementsService } from 'src/app/services/supplements.service';

@Component({
  selector: 'app-general-supplement-reports',
  templateUrl: './general-supplement-reports.component.html',
  styleUrls: ['./general-supplement-reports.component.css']
})
export class GeneralSupplementReportsComponent {
       general_report_forms:any
       reports_details:any;
       total_items:any;
       total_quantity_sold:any;
       total_cost:any;

       constructor(private api:SupplementsService){
              this.reportForms()
       }

       reportForms=()=>this.general_report_forms=new FormGroup({startDate:new FormControl(),endDate:new FormControl()})

       generateReporst=()=>{
              //console.log(this.general_report_forms)
              let body={start_date:this.general_report_forms.value.startDate,end_date:this.general_report_forms.value.endDate}
              //console.log(body)
              this.api.generalSupplementReports(body).subscribe(data=>{
                //console.log(data)
                this.reports_details=data
                let count=0;
                let quantity=0
                let cost=0;
                for(let index=0;index<data.length;index++){
                     count++
                     quantity+=data[index].quantity_purchased
                     cost+=data[index].total_cost
                }
                this.total_items=count;
                this.total_quantity_sold=quantity
                this.total_cost=cost
                console.log('total item ',count)
              
              })
       }
}
