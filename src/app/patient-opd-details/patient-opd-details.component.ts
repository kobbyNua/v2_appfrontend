import { Component } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup,FormControl,FormArray,NgForm } from '@angular/forms';

@Component({
  selector: 'app-patient-opd-details',
  templateUrl: './patient-opd-details.component.html',
  styleUrls: ['./patient-opd-details.component.css']
})
export class PatientOpdDetailsComponent {

  patient_info:any;
  checked_in_status:any;
  checked_out_status:any;
  card_numbers:any;
  payment:any;
  amountTobePaid:any;
  payment_forms:any
  case_number:any;
  opd_vital_forms:any;
  opd_vitals_state:any;
  vitals:any;
  get_vitals:any;
  card_charge:any;
  response:any
  submit_response:any;
  card_renewal_payment:any;
  patient_active_lab_case:any;
  check_active_case:any;
  submitLabTest:any;
  payment_status:any;
  active_lab_case_list:any;
  patient_history:any;
  first_name:any;
  last_name:any;
  lab_payment_request:any;
  lab_payment_response:any;
  generate_new_case_response:any;
  message:any;
  status:any;
  constructor(private api:PatientService,private activeroute:ActivatedRoute,private routes:Router){
      this.paymentForms()
      this.opdVitalForms()
      this.checkSelectBox()
  }
  
  ngOnInit(){
       this.activeroute.paramMap.subscribe(params=>{this.get_patient_opd_info(params.get('card_number'))})
       this.activeroute.paramMap.subscribe(params=>{this.get_case_number(params.get('card_number'))})
       this.activeroute.paramMap.subscribe(params=>{this.card_numbers=params.get('card_number')})
       
  }

  get_patient_opd_info=(card_number:any)=>{
       this.api.patient_opd_info(card_number).subscribe(
        
        data=>{
             this.patient_info=data;
             this.checked_in_status=data.checked_in_status[0].checked_in_status;
             this.case_number=data.checked_in_status[0].case_number;
             this.first_name=data.patient_bio[0].first_name
             this.last_name=data.patient_bio[0].last_name
             this.opd_vital_forms.patchValue({case_number:data.checked_in_status[0].case_number});
             this.payment=data.payment[0].payment_state;this.card_charge=data.payment[0].card_charge;
             this.amountTobePaid=data.payment[0].amount_paid;
             this.opd_vitals_state=data.opd_vitals[0].vital_status;
             this.patient_active_lab_case=data.active_lab_case[0].active_case
             this.check_active_case=data.active_lab_case[0].active_case.length
             this.active_lab_case_list=data.active_lab_case[0].active_lab_case_list
             this.patient_history=data.paitient_opd_history
             if(data.opd_vitals[0].vital_status==false){
                  for(let indexs =0;indexs<data.opd_vitals[1].length;indexs++){
                       
                       this.opd_vital_forms.controls['vitals_result'].push(new FormGroup({vital_name:new FormControl(data.opd_vitals[1][indexs].vitals),vital_serial_code:new FormControl(data.opd_vitals[1][indexs].serial_code),result:new FormControl(data.opd_vitals[1][indexs].results)}))
                  }
                  //this.vitals=data.opd_vitals[1]
             }
             else{
                  this.vitals=data.opd_vitals[1]
             }
             console.log(data,' hello world')
        })
  }
 
  paymentForms=()=>this.payment_forms=new FormGroup({amount:new FormControl(),case_number:new FormControl()})
  get_case_number=(card_number:any)=>{
     this.api.get_patient_case_number(card_number).subscribe(data=>this.payment_forms.patchValue({case_number:data.case_number}))
     //this.api.get_patient_case_number(card_number).subscribe(data=>this.opd_vital_forms.patchValue({case_number:data.case_number}))
  
  }
  
  makePayment=()=>{
     this.api.make_pyement(this.payment_forms.value).subscribe(data=>
          {
               this.response=data.status;
               this.message=data.message
              // if(data.status == 'success'){
                   window.location.href=this.routes.url;
                   //console.log(typeof this.routes.url,this.routes.url)
              // }
          }
     )
     //this.routes.navigate(['./'])
  }
  submitVitals=()=>{
 
     //console.log(this.opd_vital_forms)
     if(this.opd_vital_forms.valid){
          this.api.patient_opd_vital_results(this.opd_vital_forms.value.vitals_result,this.opd_vital_forms.value.case_number).subscribe(data=>this.response=data.status)
          window.location.href=this.routes.url;
     } 
     //
    // this.routes.navigate(['../'])
  }

  opdVitalForms=()=>{
    
      this.opd_vital_forms=new FormGroup({
          vital_list:new FormControl(),
          case_number:new FormControl(),
           vitals_result:new FormArray([
                 new FormGroup({
                      vital_name:new FormControl(),
                      vital_serial_code:new FormControl(),
                      result:new FormControl(),
                 })
           ])

     })

  }
  getSelectBox=()=>{
     console.log(this.opd_vital_forms.get('vital_list').text,'high')
     //console.log(events.target.value,events)
     this.opd_vital_forms.controls['vitals_result'].push(new FormGroup({vital:new FormControl(this.opd_vital_forms.get('vital_list').value[0]),result:new FormControl()}))
  }
  
  checkSelectBox=()=>{

    if(this.opd_vital_forms.controls.vitals_result.length == 1){
         if(this.opd_vital_forms.controls.vitals_result.get('vital_serial_code')==null && this.opd_vital_forms.controls.vitals_result.get('result')==null){
              this.opd_vital_forms.controls['vitals_result'].removeAt(0)    
         }
    }

  }
  
  submitPatientLab=(submitLabTest:NgForm)=>{
     
     //this.api.patientLaboratoryPayment(submitLabTest.value).subscribe(data=>this.payment_status=data)

     //lab_payment_request:any;
     //lab_payment_response:any;

     if(submitLabTest.submitted){
          if(submitLabTest.valid){
               this.api.patientLaboratoryPayment(submitLabTest.value).subscribe(data=>{
                    this.payment_status=data.status
                    if(data.status=="success"){
                         this.lab_payment_response=data.message
                         window.location.href=this.routes.url

                    }
                    else if(data.status == "error"){
                         this.lab_payment_response=data.message
                    }
               })    
          }
     }

  }

  generateNewCase=(body:NgForm)=>{
       //console.log('fine baby',body)
       if(body.submitted){
          if(body.valid){
               this.api.generate_new_case(body.value).subscribe(data=>{
                    console.log(data)
                    /*if(data.status=="success"){
                         this.generate_new_case_response=data.message
                         this.status=data.status
                         window.location.href=this.routes.url

                    }else if(data.status=="error"){
                         this.generate_new_case_response=data.message
                         this.status=data.status
                    }*/
               })
          }
       }
       //this.api.generate_new_case(body.value).subscribe(data=>console.log(data))
  }








}
