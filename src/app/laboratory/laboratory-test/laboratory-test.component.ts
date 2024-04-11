import { Component } from '@angular/core';
import {LaboratoryService}  from 'src/app/services/laboratory.service';
import { Router } from '@angular/router';
import {FormGroup,FormArray,FormControl,FormGroupDirective} from '@angular/forms';
@Component({
  selector: 'app-laboratory-test',
  templateUrl: './laboratory-test.component.html',
  styleUrls: ['./laboratory-test.component.css']
})
export class LaboratoryTestComponent {

  labtestList:any;
  labtest_forms:any;
  response:any
  lab_test_request:any;
  lab_test_response:any;

  constructor(private api:LaboratoryService,private router:Router){
     this.viewLabTestList()
     this.labTestDetailsForms()
  }
  viewLabTestList=()=>this.api.viewLabTestList().subscribe(data=>{this.labtestList=data})
  labTestDetailsForms=()=>this.labtest_forms=new FormGroup({ lab_test_price:new FormArray([new FormGroup({lab_test:new FormControl(),lab_price:new FormControl()})])})
  addLabTestPrice=()=>this.labtest_forms.controls['lab_test_price'].push(new FormGroup({lab_test:new FormControl(),lab_price:new FormControl()}))
  removeLabTestPrice=(index:number)=>{
    if(this.labtest_forms.controls['lab_test_price'].length != 1){
        this.labtest_forms.controls['lab_test_price'].removeAt(index)
    }
  }

  createLabTestDetails=(labForm:FormGroupDirective)=>{
     if(labForm.submitted)
    {
    
         if(labForm.valid){
          this.api.createLabTestDetails(labForm.value.lab_test_price).subscribe(data=>{
               this.lab_test_request=data.status
               if(data.status=="success"){
                    this.lab_test_response=data.message;
                    window.location.href=this.router.url
               }
           
          })
         }
    
    }

  }




}
