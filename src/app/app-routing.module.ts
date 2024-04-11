import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingComponent } from './setting/setting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './setting/users/users.component';
import { UsermanagementComponent } from './setting/users/usermanagement/usermanagement.component';
import { UserdetailsComponent } from './setting/users/userdetails/userdetails.component';
import { GroupsComponent } from './setting/groups/groups.component';
import {OpdVitalsComponent} from './setting/opd-vitals/opd-vitals.component';
import {RegionComponent} from './setting/region/region.component';
import { HospitalComponent } from './setting/hospital/hospital.component';
import { SupplementComponent } from './supplement/supplement.component';
import { StockSupplementComponent } from './supplement/supplement-sales/stock-supplement/stock-supplement.component';
import { SupplementDetailsComponent } from './supplement/supplement-sales/supplement-details/supplement-details.component';
import {SupplementSalesComponent} from './supplement/supplement-sales/supplement-sales.component'
import { PatientDietarySupplementComponent } from './supplement/patient-dietary-supplement/patient-dietary-supplement.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { PatientLaboratoryComponent } from './laboratory/patient-laboratory/patient-laboratory.component';
import { PatientLaboratoryDetailsComponent } from './laboratory/patient-laboratory/patient-laboratory-details/patient-laboratory-details.component';
import { LaboratoryTestComponent } from './laboratory/laboratory-test/laboratory-test.component';
import { LaboratoryTestDetailsComponent } from './laboratory/laboratory-test-details/laboratory-test-details.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientMedicCareComponent } from './doctor/patient-medic-care/patient-medic-care.component';
import { PatientComponent } from './patient/patient.component';
import { PatientOpdDetailsComponent } from './patient-opd-details/patient-opd-details.component';
import {PatientDietarySupplementDetailsComponent} from './supplement/patient-dietary-supplement/patient-dietary-supplement-details/patient-dietary-supplement-details.component';
import {SupplementInventoryComponent} from "./supplement/supplement-sales/supplement-inventory/supplement-inventory.component";
import {ProductSalesComponent} from "./supplement/supplement-sales/product-sales/product-sales.component"
import { DailySupplementReportsComponent } from './supplement/supplements-reports/daily-supplement-reports/daily-supplement-reports.component';
import { GeneralSupplementReportsComponent } from './supplement/supplements-reports/general-supplement-reports/general-supplement-reports.component';
import { SupplementsReportsComponent } from './supplement/supplements-reports/supplements-reports.component';
import { DailySupplementDailyDetailsComponent } from './supplement/supplements-reports/daily-supplement-daily-details/daily-supplement-daily-details.component';
import { MedicalDiagnosisHistoryComponent } from './doctor/medical-diagnosis-history/medical-diagnosis-history.component';
import { PatientOpdDetailsHistoryComponent } from './patient/patient-opd-details-history/patient-opd-details-history.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'auth',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"setting",component:SettingComponent},
  {path:"users",component:UsersComponent},
  {path:'users/user-management',component:UsermanagementComponent},
  {path:"users/user-details/:username",component:UserdetailsComponent},
  {path:'groups',component:GroupsComponent},
  {path:'opd-vitals',component:OpdVitalsComponent},
  {path:'region',component:RegionComponent},
  {path:'hospital',component:HospitalComponent},
  {path:'patient-opd',component:PatientComponent},
  {path:'patient-opd-details/:card_number',component:PatientOpdDetailsComponent},
  {path:'patient/patient-opd-history-details/:case_number',component:PatientOpdDetailsHistoryComponent},
  {path:'medical-care',component:DoctorComponent},
  {path:'medical-care/patient/:case_number',component:PatientMedicCareComponent},
  {path:'medical-care/mediacal-diagnosis-history/:card_number',component:MedicalDiagnosisHistoryComponent},
  {path:'dietary-supplement',component:SupplementComponent},
  {path:'supplement/stock-supplement',component:StockSupplementComponent},
  {path:'supplement/supplement-details/:serial_code',component:SupplementDetailsComponent},
  {path:'supplement/patient-supplement-list',component:PatientDietarySupplementComponent},
  {path:'dispensary-patients-details/:case_number',component:PatientDietarySupplementDetailsComponent},
  {path:'laboratory',component:LaboratoryComponent},
  {path:'laboratory/laboratory-test',component:LaboratoryTestComponent},
  {path:'laboratory/laboratory-test/laboratory-test-details/:serial_code',component:LaboratoryTestDetailsComponent},
  {path:'laboratory/patient-laboratory',component:PatientLaboratoryComponent},
  {path:'laboratory/patient-laboratory/patient-laboratory-details/:case_number',component:PatientLaboratoryDetailsComponent},
  {path:'supplement-sales',component:SupplementSalesComponent},
  {path:'supplement-sales/supplement-markets',component:SupplementInventoryComponent},
  {path:'product-sale',component:ProductSalesComponent},
  {path:'reports/daily-reports',component:DailySupplementReportsComponent},
  {path:'reports/general-supplement-reports',component:GeneralSupplementReportsComponent},
  {path:'reporst/supplement-sales-reports',component:SupplementsReportsComponent},
  {path:'reports/daily-supplement-sales-details-report/:serial_code',component:DailySupplementDailyDetailsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
