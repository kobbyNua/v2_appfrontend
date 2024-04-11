import { Component } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medical-diagnosis-history',
  templateUrl: './medical-diagnosis-history.component.html',
  styleUrls: ['./medical-diagnosis-history.component.css']
})
export class MedicalDiagnosisHistoryComponent {
      diagnosis_history:any;
      constructor(private api:DoctorService,private activte:ActivatedRoute){}
      ngOnInit(){
            this.activte.paramMap.subscribe(params=>{this.getDiagnosisHisotry(params.get('card_number'))})
      }
      
      getDiagnosisHisotry=(card_number:any)=>this.api.diagnosisHistory(card_number).subscribe(data=>this.diagnosis_history=data)

}
