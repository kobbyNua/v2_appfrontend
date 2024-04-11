import { Component } from '@angular/core';
import {SupplementsService} from 'src/app/services/supplements.service'
@Component({
  selector: 'app-patient-dietary-supplement',
  templateUrl: './patient-dietary-supplement.component.html',
  styleUrls: ['./patient-dietary-supplement.component.css']
})
export class PatientDietarySupplementComponent {

  dispensery_patient_list:any;
  constructor(private api:SupplementsService){
      this.viewPatient()
  }

  viewPatient=()=>this.api.viewPatientWaitingInDispensary().subscribe(data=>this.dispensery_patient_list=data)



}
