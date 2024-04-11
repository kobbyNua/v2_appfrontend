import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { LaboratoryService } from 'src/app/services/laboratory.service';
import {FormControl,FormGroup,FormArray, FormGroupDirective} from '@angular/forms'
@Component({
  selector: 'app-patient-laboratory-details',
  templateUrl: './patient-laboratory-details.component.html',
  styleUrls: ['./patient-laboratory-details.component.css']
})
export class PatientLaboratoryDetailsComponent {
  patient_lab_details:any;
  patient_lab_history:any;
  patient_lab_history_length:any;
  patient_lab_test_result:any;
  patient_bio_data:any;
  released_status:any;
  test_forms:any;
  payment_status:any;
  lab_results:any;
  lab_test_status:any;

  constructor(private active_route:ActivatedRoute,private api:LaboratoryService,private  router:Router){
     this.labTestUpdateForm()
     this.checkLabTest()
  }

  ngOnInit(){
    this.active_route.paramMap.subscribe(params=>{this.getPatientLab(params.get('case_number'))})
    this.active_route.paramMap.subscribe(params=>{this.test_forms.patchValue({case_number:params.get('case_number')})})
  }
  getPatientLab=(case_number:any)=>{
    this.api.getLabPatientLabDetails(case_number).subscribe(data=>{
      this.patient_lab_details=data;this.patient_lab_history=data.patient_lab_history;this.patient_lab_history_length=data.patient_lab_history.length;this.patient_lab_test_result=data.lab_tests;this.patient_bio_data=data.patient_lab_bio_details,this.released_status=data.released_status;this.payment_status=data.payment_status;console.log(data,'okay')
      for(let index=0;index<data.lab_tests.length;index++){
            
             this.test_forms.controls.lab_test_details.push(new FormGroup({
                 lab_test:new FormControl(data.lab_tests[index].lab_test_type),
                 cost:new FormControl(data.lab_tests[index].cost),
                 serial_code:new FormControl(data.lab_tests[index].serial_code),
                 results:new FormControl(data.lab_tests[index].results),

             }))
           /*  this.test_forms.controls['lab_test_details'].push(new FormGroup({
                    

             }))*/
      }
    })
  }

  
  labTestUpdateForm=()=>{
        this.test_forms=new FormGroup({
              case_number:new FormControl(),
              lab_test_details:new FormArray([
                    new FormGroup({
                          lab_test:new FormControl(),
                          cost:new FormControl(),
                          serial_code:new FormControl(),
                          results:new FormControl()
                    })
              ])
        })
  }


 checkLabTest=()=>{
     if(this.test_forms.controls.lab_test_details.length>=1){

      if(this.test_forms.controls.lab_test_details.get('lab_test')==null && this.test_forms.controls.lab_test_details.get('cost')==null && this.test_forms.controls.lab_test_details.get('serial_code')==null && this.test_forms.controls.lab_test_details.get('results')==null){
        this.test_forms.controls['lab_test_details'].removeAt(0)    
   }
     }
 }


 submit_lab_test_results=(labForms:FormGroupDirective)=>{
              console.log(labForms.value,'fine')
              console.log(labForms)
              let lab_serial_codes=[]
              let test_results=[]
              console.log(labForms.value.lab_test_details)
              for(let index=0;index<labForms.value.lab_test_details.length;index++){
                      lab_serial_codes.push(labForms.value.lab_test_details[index].serial_code)
                      test_results.push(labForms.value.lab_test_details[index].results)
                    

              }
              let body={'case_number':labForms.value.case_number,'serial_code':lab_serial_codes,'results':test_results}
             if(labForms.submitted){
                  if(labForms.valid){

                       
                    this.api.submitLaboratory(body).subscribe(data=>{
                      console.log(data)
                      this.lab_test_status=data.status;
                      if(data.status === 'success'){
                        this.lab_results=data.success
                        window.location.href=this.router.url
                      }
                    })
                    
                  }
             }
             
             //console.log(body)
             //if(v)
             //
            
              
 }
}
