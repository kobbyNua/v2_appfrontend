import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl,FormArray,NgForm,FormGroupDirective, Validators } from '@angular/forms';
import { SupplementsService } from 'src/app/services/supplements.service';
@Component({
  selector: 'app-stock-supplement',
  templateUrl: './stock-supplement.component.html',
  styleUrls: ['./stock-supplement.component.css']
})
export class StockSupplementComponent {


      //creating new stocks details
      // view stock details
      //update stocks
      supplement_forms:any;
      response:any
      supplement:any;
      shortage:any
      supplement_status:any;
      supplement_request:any;
      constructor(private api:SupplementsService,private router:Router){
         this.dietarySupplementForms()
         this.viewSupplement()
         this.shortageSupplement()
      }

   
  dietarySupplementForms=()=>{
  
      this.supplement_forms=new FormGroup({
       
         dietary_supplement:new FormControl('',[Validators.required]),
         price:new FormControl('',[Validators.required]),
         quantity:new FormControl('',[Validators.required]),
         photo:new FormControl('',[Validators.required]),
         newFile:new FormControl('',[Validators.required])
      })
  }

  handleEvent=(event:any)=>{
   
      const file= event.target.files[0]
      this.supplement_forms.patchValue({newFile:file})
      //console.log(file.name)
  }

  createDietarySupplement=(supplement:FormGroupDirective)=>{
         
 
      //console.log(supplement)
      
     //
      if(supplement.submitted){
           if(supplement.valid){
            //supplement_status:any;
            //supplement_request:any;
            this.api.createSupplementDetail(supplement.value).subscribe(data=>{
                this.supplement_status=data.status;
                console.log(data)
                if(data.status=="success"){
                   this.supplement_request=data.message
                   window.location.href=this.router.url
                }
                else if(data.status=="error"){
                  this.supplement_request=data.message
                }
            })
           }
      }  
  }
  viewSupplement=()=>{
     this.api.viewDietarySupplement().subscribe(data=>{this.supplement=data;console.log(data)})
  }
  
  shortageSupplement=()=>{
      this.api.viewUrgentSupplement().subscribe(data=>{this.shortage=data;console.log(data,'come')})
  }
}


