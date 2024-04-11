import { Component } from '@angular/core';
import { SupplementsService } from 'src/app/services/supplements.service';


@Component({
  selector: 'app-daily-supplement-reports',
  templateUrl: './daily-supplement-reports.component.html',
  styleUrls: ['./daily-supplement-reports.component.css']
})
export class DailySupplementReportsComponent {

     reports:any;
     total_items_sold:any;
     total_items_quantity_sold:any;
     total_profit_crew:any

     constructor(private api:SupplementsService){
        this.dailyReports()
     }


     dailyReports=()=>{
         this.api.DailySupplementReports().subscribe(
          data=>{
            this.reports=data
            this.total_items_sold=data.length;
            let quantity=0;
            let total_cost=0.00;
            for(let index=0;index<data.length;index++){
                quantity+=data[index].total_quantity
                total_cost+=data[index].total_profit_crew
            }
            this.total_items_quantity_sold=quantity
            this.total_profit_crew=total_cost

          })
     }
    

}
