import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { LaboratoryService } from 'src/app/services/laboratory.service';
import { FormGroup,FormArray,FormControl,NgForm } from '@angular/forms';

@Component({
  selector: 'app-laboratory-test-details',
  templateUrl: './laboratory-test-details.component.html',
  styleUrls: ['./laboratory-test-details.component.css']
})
export class LaboratoryTestDetailsComponent {

  labtestdetails:any;
  test_type:any;
  lab_code:any;
  test_cost:any;
  update_form:any;
  lab_test_request:any;
  lab_test_response:any;
  constructor(private api:LaboratoryService,private activateroute:ActivatedRoute,private router:Router){

  }
  ngOnInit(){
       this.activateroute.paramMap.subscribe(params=>{this.labTestDetails(params.get('serial_code'))})
  }


  labTestDetails=(serial_code:any)=>this.api.labdetails(serial_code).subscribe(data=>{this.test_type=data.lab_test,this.test_cost=data.cost,this.lab_code=data.serial_code})



  labtestDetailsUpdateForm=()=>this.update_form=new FormGroup({test_type:new FormControl(),cost:new FormControl(),serial_code:new FormControl()})
  editLabTest=(test:NgForm)=>{
     if(test.submitted){
         if(test.valid){
          this.api.editLab(test.value).subscribe(data=>{
             this.lab_test_request=data.status
          
               if(data.status){
                      this.lab_test_response=data.success
                      window.location.href=this.router.url
               }
          })
         }
     }
    
  }

}
