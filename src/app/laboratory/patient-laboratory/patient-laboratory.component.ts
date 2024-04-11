import { Component } from '@angular/core';
import { LaboratoryService } from 'src/app/services/laboratory.service';
@Component({
  selector: 'app-patient-laboratory',
  templateUrl: './patient-laboratory.component.html',
  styleUrls: ['./patient-laboratory.component.css']
})
export class PatientLaboratoryComponent {
  waiting_patient_lab:any;

  constructor(private api:LaboratoryService){
     this.waitingLabPatient()
  }

  waitingLabPatient=()=>{
      this.api.waitingPatientLabTest().subscribe(data=>{this.waiting_patient_lab=data;console.warn(data)})
  }
}
