import { Component } from '@angular/core';
import { FormGroup,FormControl,FormArray,NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplementsService } from 'src/app/services/supplements.service';

@Component({
  selector: 'app-supplement-details',
  templateUrl: './supplement-details.component.html',
  styleUrls: ['./supplement-details.component.css']
})
export class SupplementDetailsComponent {
      dietary_serial_code:any
      stock_history:any;
      response:any;
      supplement_name:any;
      supplement_form:any;
      dietary_response:any;
      dietary_update_status:any;
      dietary_update_response:any;
      supplement_details_status:any;
      supplement_details_update:any;
      dietary_profile:any;
      constructor(private api:SupplementsService,private activeroute:ActivatedRoute,private router:Router){}


      ngOnInit(){
        this.activeroute.paramMap.subscribe(params=>{this.stockDetailsHistory(params.get('serial_code'))})
        this.activeroute.paramMap.subscribe(params=>{this.supplementDetails(params.get('serial_code'))}) 
        this.activeroute.paramMap.subscribe(params=>{this.dietary_serial_code=params.get('serial_code')})  
      }
   stockDetailsHistory=(id:any)=>{
     this.api.stockingDetailsHistory(id).subscribe(data=>{this.stock_history=data.history_details,this.dietary_profile=data.supplement_details})
   }
   supplementDetails=(id:any)=>{
      this.api.dietaryInfo(id).subscribe(data=>{this.supplement_name=data.supplement})
   }
   takeStocks=(forms:NgForm)=>{
           // this.dietary_update_status=data.status
           //
           if(forms.submitted){
                if(forms.valid){
                  this.api.supplementStockUpate(forms.value).subscribe(data=>{
                    //this.response=data
                    
                    this.dietary_update_status=data.status
                    if(data.status==='success'){
                        this.dietary_update_response=data.message;
                        window.location.href=this.router.url;  
                    }
                    else if(data.status ==='error'){
                        this.dietary_update_response=data.message;
                    }
                  })
                }
                
           }
          
   }
   updateSupplementForm=()=>{
       this.supplement_form=new FormGroup({
            supplement:new FormControl(),
            serial_code:new FormControl()
       })
   }
 
   updateSupplement=(forms:NgForm)=>{
     //console.log(forms.value)
     if(forms.submitted){
         if(forms.valid){
                 //supplement_details_status:any;
                //supplement_details_update:any;
                this.api.supplementUpdate(forms.value).subscribe(data=>{
                  this.supplement_details_status=data.status;
                  if(data.status=="success"){
                      window.location.href=this.router.url;
                      this.supplement_details_update=data.success;
                  }
                 
                })
         }
     }
     
   }


}
