import { Component } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-opd-details-history',
  templateUrl: './patient-opd-details-history.component.html',
  styleUrls: ['./patient-opd-details-history.component.css']
})
export class PatientOpdDetailsHistoryComponent {
      patient_bio:any
      patient_opd_vital_details:any;
      patient_lab_details:any;
      patient_lab_record:any;
      patient_supplement_records:any;
      patient_supplement:any;
      cases:any
      first_name:any;
      last_name:any;
      card_number:any;
      case_number:any;
      constructor(private api:PatientService,private route:ActivatedRoute){}
      ngOnInit(){
           this.route.paramMap.subscribe(params=>this.getPatientOpdHistroy(params.get('case_number')))
      }


      getPatientOpdHistroy=(case_number:any)=>{
          
         this.api.patientOpdHistoryDetails(case_number).subscribe(
          data=>{
            //console.log(data);
            this.patient_bio=data.patient_bio_data
            this.first_name=data.patient_bio_data.first_name;
            this.last_name=data.patient_bio_data.last_name
            this.card_number=data.patient_bio_data.card_number
            this.case_number=data.patient_bio_data.case_number
            this.patient_opd_vital_details=data.patient_opd_vitals
            this.patient_lab_record=data.patient_lab[0].lab_test_records
            this.patient_lab_details=data.patient_lab[0].lab_test_details
            this.patient_supplement=data.patient_supplement.patient_supplement_record_details
            this.patient_supplement_records=data.patient_supplement.patient_supplement_record
            this.cases=data.patient_cases
          }
          
          )
      }
}
