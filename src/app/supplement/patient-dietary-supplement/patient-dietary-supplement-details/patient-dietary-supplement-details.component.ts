import { Component } from '@angular/core';
import { SupplementsService } from 'src/app/services/supplements.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup,FormControl,FormArray,FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-patient-dietary-supplement-details',
  templateUrl: './patient-dietary-supplement-details.component.html',
  styleUrls: ['./patient-dietary-supplement-details.component.css']
})
export class PatientDietarySupplementDetailsComponent {

  patient_dietary_list:any;
  patient_dietary_forms:any;
  payment_status:any;
  patient_history_list_check:any;
  patient_history:any
  supplements:any;
  supplement_cost_details={cost:"",quantity:""}
  discount_rate:any;
  costs:any;
  discount_cost:any;
  total_cost=0
  cost_per_unit=0
  quantity:any;
  grand_cost:any
  patient_dietary_request:any;
  patient_dietary_status:any;
  patient_bio:any;
  constructor(private api:SupplementsService,private active:ActivatedRoute,private router:Router){
       this.patientDieatryForms()
       this.checkLabTest()
       this.values_return()
  
  }
  ngOnInit(){
       this.active.paramMap.subscribe(params=>{this.gePatientDetails(params.get('case_number'))})
       this.active.paramMap.subscribe(params=>{this.patient_dietary_forms.patchValue({case_number:params.get('case_number')})})

  }



  gePatientDetails=(case_number:any)=>{
    this.api.getPatientSupplementList(case_number).subscribe(data=>{this.patient_dietary_list=data;
          //console.log(data.patient_dietary_history_list,'hello')
              this.patient_history_list_check=data.patient_dietary_history_list.length
              this.patient_history=data.patient_dietary_history_list
              this.payment_status=data.patient_dietory_records[0].payment_status;
              //console.log(data.patient_dietary_supplement_list)
              this.supplements=data.patient_dietary_supplement_list
              //this.patient_dietary_forms.patchValue({amount:data.patient_dietory_records[0].total_cost})
              for(let index =0;index<data.patient_dietary_supplement_list.length;index++){
                   this.patient_dietary_forms.controls.dieray_details.push(new FormGroup({
                        dietary:new FormControl(data.patient_dietary_supplement_list[index].dietary),
                        serial_code:new FormControl(data.patient_dietary_supplement_list[index].dietary_code),
                        cost:new FormControl(data.patient_dietary_supplement_list[index].cost),
                        quantity:new FormControl(data.patient_dietary_supplement_list[index].quantity_bought),
                        total_cost:new FormControl(data.patient_dietary_supplement_list[index].quantity_bought * data.patient_dietary_supplement_list[index].cost)

                   }))
                   
                   this.total_cost+=data.patient_dietary_supplement_list[index].cost
                   
                   //console.log('freedom',this.patient_dietary_forms.controls.dieray_details.controls.length)
                   //console.log(this.patient_dietary_forms.controls.dieray_details.controls,'boom')
                   //this.patient_dietary_forms.controls.dieray_details.
              }
              this.discount_cost=data.patient_dietory_records[0].discount_amount
              this.discount_rate=data.patient_dietory_records[0].discount_rate
              //console.log(this.patient_dietary_forms.controls.dieray_details,'here')
              for(let x=0;x<this.patient_dietary_forms.controls.dieray_details.controls.length;x++){
                  // this.patient_dietary_forms.controls.dieray_details.controls[x].get('quantity').valueChanges(x=>console.log(x))
              }
              //this.patient_bio=this.data.
              //this.patient_dietary_forms.controls.dieray_details.quantity.valueChanges.subscribe(x=>{console.log(x)})
    })
  }
  values_return=()=>{
     // console.log(this.patient_dietary_forms.controls.dieray_details.value,'catch')
  }
  patientDieatryForms=()=>{
         this.patient_dietary_forms=new FormGroup({
              case_number:new FormControl(),
              amount:new FormControl(),
              dieray_details:new FormArray([
                   new FormGroup({
                       dietary:new FormControl(),
                       serial_code:new FormControl(),
                       cost:new FormControl(),
                       quantity:new FormControl(),
                       //total_cost:new FormControl()
                   })
              ])
         })
         console.log(this.patient_dietary_forms)

  }



  checkLabTest=()=>{
    if(this.patient_dietary_forms.controls.dieray_details.length>=1){

     if(this.patient_dietary_forms.controls.dieray_details.get('dietary')==null && this.patient_dietary_forms.controls.dieray_details.get('cost')==null && this.patient_dietary_forms.controls.dieray_details.get('serial_code')==null && this.patient_dietary_forms.controls.dieray_details.get('quantity')==null){
       this.patient_dietary_forms.controls['dieray_details'].removeAt(0)    
     }
    }
  }

  submitDietarySupplement=(patientDietary:FormGroupDirective)=>{

       
         let serial_code=[]
         let quantity=[]
         for(let index=0;index<patientDietary.value.dieray_details.length;index++){
               serial_code.push(patientDietary.value.dieray_details[index].serial_code)
               quantity.push(patientDietary.value.dieray_details[index].quantity)
         }
         let body={'case_number':patientDietary.value.case_number,'serial_code':serial_code,'quantity':quantity,'amount':this.patient_dietary_forms.value.amount}
        // console.log(body)
        if(patientDietary.submitted){
           if(patientDietary.valid){
                    
                      this.api.patientDietarySupplement(body).subscribe(data=>{
                         this.patient_dietary_request;
                         this.patient_dietary_status=data.status;
                      if(data.status=="success"){
                         this.patient_dietary_request=data.message;
                         window.location.href=this.router.url
                      }
                      else if(data.status=="error"){
                         this.patient_dietary_request=data.message;
                      }
                      })

           }
        }
        
  }

 updateCost=(data:any)=>{

      let change_in_quantity=this.patient_dietary_forms.controls.dieray_details.value
      console.log(change_in_quantity,'hello')
      let total_cost=0
      for(let i=0;i<change_in_quantity.length;i++){

             change_in_quantity[i].total_cost=change_in_quantity[i].quantity * change_in_quantity[i].cost

             total_cost+=change_in_quantity[i].total_cost
      }
      this.total_cost=total_cost
      this.grand_cost=this.total_cost
      this.discount_cost=this.total_cost*(100-this.patient_dietary_list.patient_dietory_records[0].discount_rate)/100;
      console.log('helloo ',this.patient_dietary_list)

 }


}
