import { Component } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {

  waitng_patient:any;
  diagnosis_history:any;
  constructor(private api:DoctorService){
    this.checkedInPatient()
  }

  checkedInPatient=()=>{
      this.api.checkedInpatient().subscribe(data=>this.waitng_patient=data)
  }
  searchPatient=(search:any)=>{
      //console.log(search)
      let body={'card_number':search.control.value}
      this.api.patientMedicalDiagnosisHistory(body).subscribe(data=>this.diagnosis_history=data)
  }

}
