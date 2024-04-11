import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupplementsService } from 'src/app/services/supplements.service';
@Component({
  selector: 'app-daily-supplement-daily-details',
  templateUrl: './daily-supplement-daily-details.component.html',
  styleUrls: ['./daily-supplement-daily-details.component.css']
})
export class DailySupplementDailyDetailsComponent {
    supplements_details:any;
    supplements_reports:any;
    supplement_name:any;
    serial_codes:any;
    quantity:any;
    cost:any;
    total_quantity:any;
    total_sales:any
    sales_date:any;
    
   
    constructor(private route:ActivatedRoute,private api:SupplementsService){}
    ngOnInit(){
        this.route.paramMap.subscribe(param=>{this. getSupplementReportDetails(param.get('serial_code'))})
    }
    getSupplementReportDetails=(serial_code:any)=>{this.api.dailySupplementSalesDetails({'serial_code':serial_code}).subscribe(data=>{
      let total_quantity=0  
      let sales=0;
      //console.log(data[1],' hello 1 ')
      for(let index=0;index<data[1].length;index++){
              //console.log(data[1][index].reports.quantity," reports 2 ")
              total_quantity+=data[1][index].reports.quantity
              sales+=data[1][index].reports.total_cost
              console.log(data[1][index].reports,' hello ')
      }
      this.total_quantity=total_quantity
      this.total_sales=sales
      console.log(total_quantity)
        this.supplements_details=data[0],this.serial_codes=data[0].supplement_details.serial_code,this.supplement_name=data[0].supplement_details.supplement;this.supplements_reports=data[1];this.cost=data[0].supplement_details.cost;this.sales_date=data[0].supplement_details.date;this.quantity=data[0].supplement_details.quantity;console.log(data,data[0])
        
      })
    }
}
