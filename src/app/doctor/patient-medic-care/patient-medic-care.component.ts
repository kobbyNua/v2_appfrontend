import { Component } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup,FormControl,FormArray,NgForm, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-patient-medic-care',
  templateUrl: './patient-medic-care.component.html',
  styleUrls: ['./patient-medic-care.component.css']
})
export class PatientMedicCareComponent {

  patient_diagonsis:any; 
  lab_test_list:any;
  supplement_list:any;
  opd_vitals:any;
  patient_complains:any;
  patient_complains_response:any;
  patient_complaints_message:any;
  doctor_diagnosis:any;
  case_number:any;
  patient_medical_history:any;
  select_lab_forms:any;
  select_lab_type:any;
  lab_form_group:any
  lab_request_status:any;
  lab_request_response:any;
  out_side_lab_form:any;
  total_lab_cost:any=0.00;
  supplement_forms:any;
  patient_lab_status:any;
  patient_lab_result:any;
  patient_dietary_status:any;
  patient_dietary:any
  patient_dispensed_supplement:any;
  doctor_diagnosis_resposne:any;
  doctor_diagnosis_complain_response:any;
  first_name:any;
  last_name:any;
  card_numbers:any;
  supplement_status:any;
  supplement_request:any;
  
  constructor(private api:DoctorService,private activte:ActivatedRoute,private router:Router){
      this.laboratoryTestType()
      this.getLabTestForms()
      this.checkLabTestForms()
      this.dietary_supplemnt_forms()
      this.checkEmptySupplementForms()
  }

  ngOnInit(){
          this.activte.paramMap.subscribe(params=>{this.getPatientDignosis(params.get('case_number'))})
          this.activte.paramMap.subscribe(params=>{this.case_number=params.get('case_number')})
          this.activte.paramMap.subscribe(params=>{this.lab_form_group.patchValue({case_number:params.get('case_number')})})
          this.activte.paramMap.subscribe(params=>{this.supplement_forms.patchValue({case_numbers:params.get('case_number')})})
  }

 getPatientDignosis=(case_number:any)=>{
        this.api.patientDiagonsis(case_number).subscribe(
         data=>{
           this.patient_diagonsis=data;this.first_name=data.patient_bio.first_name;this.last_name=data.patient_bio.last_name;this.card_numbers=data.patient_bio.card_number;this.opd_vitals=data.patient_opd_vitals;this.patient_complains=data.patient_diagnosis;this.doctor_diagnosis=data.doctor_diagnosis;this.lab_test_list=data.laboratory_test_list;this.supplement_list=data.supplement_list;this.patient_medical_history=data.patient_medical_history;this.patient_lab_status=data.lab_test_status[0].status;this.patient_lab_result=data.patient_lab;console.log('hello am here',data.patient_lab);this.patient_dietary_status=data.patient_dietary_status[0].status;this.patient_dietary=data.patient_dietary;console.log(data,'fine')})
 }

 laboratoryTestType=()=>{
 
              this.select_lab_forms=new FormGroup({
                      in_house_lab_type:new FormControl(''),
                     
              })
      
         
 }

 getLabType=(events:any)=>{
      this.select_lab_type=events.target.value
      this.lab_form_group.patchValue({lab_test_request_status:events.target.value})
      //work here
      
      
 }
 getlabTestType=(event:any)=>{
      //console.log(event.target.value)
      this.api.getLabdetails(event.target.value).subscribe(data=>{
            
        for(let index=0;index<data.length;index++){
                console.log(data[index])
                this.lab_form_group.controls['test_detail_form'].push(new FormGroup({test_type:new FormControl(data[index].lab_test),serial_code:new FormControl(data[index].serial_code),test_cost:new FormControl(data[index].cost)}))
                this.total_lab_cost+=data[index].cost
        }
          
      })
 
    
 }
 outLabTestForm=()=>{
          
          this.out_side_lab_form=new FormGroup({
                     
          })
 }

 submitLab=(lab_forms:FormGroupDirective)=>{
   //console.log('alright ',this.lab_form_group,);
   //console.log(lab_forms)
   let data_serial_code=[]
   for(let index =0;index<lab_forms.value.test_detail_form.length;index++){
           data_serial_code.push(lab_forms.value.test_detail_form[index].serial_code)
   }

   let body={'case_number':lab_forms.value.case_number,'serial_code':data_serial_code,'in_house_lab_status':lab_forms.value.lab_test_request_status}
   //console.log(body)
   if(lab_forms.submitted){
          if(lab_forms.valid){
            this.api.submitLabTestRequest(body).subscribe(data=>{
               this.lab_request_status=data.status;
              
                 if(data.status == 'success'){
                        this.lab_request_response=data.success;
                        window.location.href=this.router.url;
                 }
                 else if(data.status == 'error'){
                         this.lab_request_response=data.error;
                 } 
            })
          }
   }
   
   //if(this.lab_form_group.valid)
   // console.log(this.lab_form_group,'hit')
  // 
 }
 getLabTestForms=()=>{
          this.lab_form_group=new FormGroup({
           case_number:new FormControl(),
           lab_test_request_status:new FormControl(),
           test_detail_form:new FormArray([
             new FormGroup({
                  test_type:new FormControl(),
                  serial_code:new FormControl(),
                  test_cost:new FormControl(),
             })
            ])
              
          }) 

         
 }

 checkLabTestForms=()=>{
       
   if(this.lab_form_group.controls.test_detail_form.length ==1){
         if(this.lab_form_group.controls.test_detail_form.test_type==null && this.lab_form_group.controls.test_detail_form.serial_code==null && this.lab_form_group.controls.test_detail_form.test_cost == null){
           this.lab_form_group.controls['test_detail_form'].removeAt(0) 
         }
   }
 }
 removeCheckLabTestForms=(index:any)=>{
   this.lab_form_group.controls['test_detail_form'].removeAt(index)
 }
 dietary_supplemnt_forms=()=>{
         this.supplement_forms=new FormGroup({
               case_numbers:new FormControl(),
               dietary_forms:new FormArray([
                     new FormGroup({
                           supplement:new FormControl(),
                           serial_code:new FormControl(),
                     })
               ])
               
         })
 }

 
 getSupplementValue=(event:any)=>{
         console.log(event.target.value)
         this.api.getSupplement(event.target.value).subscribe(data=>{
           for(let index=0;index<data.length;index++){
               console.log(data[index].supplement)
               this.supplement_forms.controls['dietary_forms'].push(new FormGroup({
                 supplement:new FormControl(data[index].supplement),
                 serial_code:new FormControl(data[index].serial_code)
               }))
           }
         })
           //{,}));console.log(data)})
 }
//pcbiblestudy
 submitSupplements=(dietaryForm:FormGroupDirective)=>{
       //console.log(this.supplement_forms.value)
       let dietary_serial_code=[]
       for(let index=0;index<dietaryForm.value.dietary_forms.length;index++){
              dietary_serial_code.push(dietaryForm.value.dietary_forms[index].serial_code)
       }
       //console.log(dietary_serial_code)
       let body={'case_number':dietaryForm.value.case_numbers,'serial_code':dietary_serial_code}
       //console.log(body)
       this.api.submitDietaryRequest(body).subscribe(data=>{
             this.supplement_status=data.status;
             
             if(data.status =="success"){
              this.supplement_request=data.success;
              window.location.href=this.router.url;
             }
       })
 }

 checkEmptySupplementForms=()=>{
       
   if(this.supplement_forms.controls.dietary_forms.length ==1){
         if(this.supplement_forms.controls.dietary_forms.supplement==null && this.supplement_forms.controls.dietary_forms.serial_code==null){
           this.supplement_forms.controls.dietary_forms.removeAt(0) 
         }
   }
 }
 removeEmptySuppleForm=(index:any)=>{
   this.supplement_forms.controls.dietary_forms.removeAt(index)
 }
 submitPatientComplaints=(forms:NgForm)=>{
      //alert(forms.value)
      //console.log(forms.value)
      if(forms.submitted){
          if(forms.valid){
             console.log(forms.value)
            //console.log()
             this.api.getPatientComplainst(forms.value).subscribe(data=>{
              console.log(data);
              this.patient_complains_response=data.status;
              this.patient_complaints_message=data.success;
              if(data.status ==="success"){
                window.location.href=this.router.url;
              }
              
            })
             
          }
      }
      
 }

 submitDoctorDiagnosis=(forms:NgForm)=>{
   //alert(forms.value)
    if(forms.submitted){
      console.log(forms.value)
      if(forms.valid){
             
              this.api.getDoctorDiangosis(forms.value).subscribe(data=>{
                console.log('hello world ',data)
                this.doctor_diagnosis_resposne=data.status
                this.doctor_diagnosis_complain_response=data.success
                if(data.status == "success"){
                  window.location.href=this.router.url;  
                }
                //console.log(data);
              })
      }
      
    }

 }










}
