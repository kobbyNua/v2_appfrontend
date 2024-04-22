import { Component } from '@angular/core';
import { FormGroup,FormControl,FormGroupDirective} from '@angular/forms';
import { SettingsService } from 'src/app/services/settings.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-cardfees',
  templateUrl: './cardfees.component.html',
  styleUrls: ['./cardfees.component.css']
})
export class CardfeesComponent {

     cards_fees:any
     card_response:any;
     card_fee_list:any;
     card_fees_logs:any;
     card_fees_renewal_logs:any;

     constructor(private api:SettingsService,private router:Router){
      this.cardFormFees()
      this.ViewCardfees();
      this.ViewCardfeesLogs();
              
     }

     cardFormFees=()=>{
            this.cards_fees=new FormGroup({card_fees:new FormControl(),renewal_card_fees:new FormControl()})
     }
     CreateCardFees=(cardfee:FormGroupDirective)=>{
          //console.log(cardfee.value)
          this.api.createCardCharges(cardfee.value).subscribe(data=>{

            if(data.status == 'success'){
              this.card_response=data.success;
              window.location.href=this.router.url;
            }
            else if(data.status == 'error'){
               this.card_response=data.error;
            } 
                    
          })
     }
     ViewCardfees=()=>{
         this.api.viewCardCharges().subscribe(data=>{this.card_fee_list=data})
        
     }
     ViewCardfeesLogs=()=>this.api.viewCardChargesLogs().subscribe(data=>{this.card_fees_logs=data.fees,this.card_fees_renewal_logs=data.review_fees})
     
}
