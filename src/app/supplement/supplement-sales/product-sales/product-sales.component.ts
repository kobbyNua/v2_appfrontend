import { Component } from '@angular/core';
import { SupplementsService } from 'src/app/services/supplements.service';
import {FormGroup,FormArray,FormControl} from '@angular/forms';

@Component({
  selector: 'app-product-sales',
  templateUrl: './product-sales.component.html',
  styleUrls: ['./product-sales.component.css']
})
export class ProductSalesComponent {
       supplement_list:any;
       supplemenet_arr:any[]=[]
       //list:any;
       purchas_forms:any;
       total_cost=0.00

      constructor(private api:SupplementsService){
        this.supplement()
        this.getDietaryList()
        this.purchaseForms()
        this.checkPurchaseFormList()
        this.checkSupplementFormList()
      }

      supplement=()=>this.api.viewDietarySupplement().subscribe(data=>{console.log(data);this.supplement_list=data})

      selectSupplemnt=(dietary:any)=>{
            

        console.log(dietary.target.value)
          // this.supplemenet_arr.push(dietary.target.value)
           this.api.getDietarySupplement(dietary.target.value).subscribe(data=>{
                let supplement_list:any[]=[]
                 //console.log(data," hello ")
                 //supplement_list.push(data)
                 for(let index=0;index<data.length;index++){
                 // console.log(data[index],'hello mine')
                  this.total_cost+=data[index].cost_per_price
                  this.purchas_forms.controls['purchares_items'].push(new FormGroup({serial_code:new FormControl(data[index].serial_code),quantity:new FormControl(1),cost:new FormControl(data[index].cost_per_price),supplement:new FormControl(data[index].supplement)}))
                 };
                 
                 //console.log(this.purchas_forms)
                 
            })  
            
           // console.log(this.supplemenet_arr,'add on')
      }
      purchaseForms=()=>this.purchas_forms=new FormGroup({telephone:new FormControl(),discount_rate:new FormControl(0),purchares_items:new FormArray([new FormGroup({serial_code:new FormControl(),quantity:new FormControl(),cost:new FormControl(),supplement:new FormControl()})])})
      removeSupplemnt=(index:any)=>this.supplemenet_arr.splice(index)


      getDietaryList=()=>{
        console.log(this.purchas_forms,'hii')
        // this.list=this.supplemenet_arr;console.log(this.supplemenet_arr)
 
         //this.api.get
         //console.log({serial:this.supplemenet_arr},' hii')
        // console.log(this.supplemenet_arr,'hello')
        //let data={serial:this.supplemenet_arr}
        //this.api.getDietarySupplement({'serial':this.supplemenet_arr}).subscribe(data=>console.log(data,'hello mart'))
       }
       checkPurchaseFormList=()=>{
        if(this.purchas_forms.controls.purchares_items.length ==1){
          if(this.purchas_forms.controls.purchares_items.supplement==null && this.purchas_forms.controls.purchares_items.serial_code==null && this.purchas_forms.controls.purchares_items.cost==null){
            this.purchas_forms.controls.purchares_items.removeAt(0) 
          }
    }


       }

       priceUpdate=(data:any)=>{
        let change_in_quantity=this.purchas_forms.controls.purchares_items.value
        let  total_cost=0;
        for(let index=0;index<change_in_quantity.length;index++){
                let change_in_quantity_price=change_in_quantity[index].quantity * change_in_quantity[index].cost
                console.log('cost ',change_in_quantity_price)
                total_cost+=change_in_quantity_price
        }
        this.total_cost=total_cost
        //console.log(show,'kill')
       }

       checkSupplementFormList=()=>{
        
                
       }
       removeSupplement=(index:any)=>{
        this.purchas_forms.controls.purchares_items.removeAt(index)
        let change_in_quantity=this.purchas_forms.controls.purchares_items.value
        let total_cost=0;
        for(let index=0;index<change_in_quantity.length;index++){
             let change_in_quantity_price=change_in_quantity[index].quantity * change_in_quantity[index].cost
             console.log('cost ',change_in_quantity_price)
             total_cost+=change_in_quantity_price
        }
        
        this.total_cost=total_cost
        //console.log(this.purchas_forms.controls.purchares_items.value)
       }
       makeInventoryPayment=()=>{
          console.log(this.purchas_forms,' hello ')
     

          let supplement=[]
          let quantity=[]
          for(let index=0;index<this.purchas_forms.value.purchares_items.length;index++){
                  supplement.push(this.purchas_forms.value.purchares_items[index].serial_code)
                  quantity.push(parseInt(this.purchas_forms.value.purchares_items[index].quantity))
                  console.log(this.purchas_forms.value.purchares_items[index],' hello')
          }
          let body={'telephone':this.purchas_forms.value.telephone,'serial_code':supplement,'quantity':quantity,'discount_rate':this.purchas_forms.value.discount_rate}
          this.api.customerSaleInventory(body).subscribe(data=>console.log(data))
         // console.log(body,'hi')
            
       }
}
