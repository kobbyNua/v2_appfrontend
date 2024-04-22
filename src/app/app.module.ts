import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
//import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';
import { SupplementComponent } from './supplement/supplement.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { UsersComponent } from './setting/users/users.component';
import { RegionComponent } from './setting/region/region.component';
import { HospitalComponent } from './setting/hospital/hospital.component';
import { OpdVitalsComponent } from './setting/opd-vitals/opd-vitals.component';
import { SrttingdashboardComponent } from './setting/srttingdashboard/srttingdashboard.component';
import { SrttingsidebarComponent } from './setting/srttingsidebar/srttingsidebar.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { FooterComponent } from './footer/footer.component';
import { UsermanagementComponent } from './setting/users/usermanagement/usermanagement.component';
import { UserdetailsComponent } from './setting/users/userdetails/userdetails.component';
import { GroupsComponent } from './setting/groups/groups.component';
import { HospitalDetailsComponent } from './setting/hospital/hospital-details/hospital-details.component';
import { PatientDietarySupplementComponent } from './supplement/patient-dietary-supplement/patient-dietary-supplement.component';
import { PatientDietarySupplementDetailsComponent } from './supplement/patient-dietary-supplement/patient-dietary-supplement-details/patient-dietary-supplement-details.component';
import { SupplementSalesComponent } from './supplement/supplement-sales/supplement-sales.component';
import { StockSupplementComponent } from './supplement/supplement-sales/stock-supplement/stock-supplement.component';
import { ProductSalesComponent } from './supplement/supplement-sales/product-sales/product-sales.component';
import { SupplementInventoryComponent } from './supplement/supplement-sales/supplement-inventory/supplement-inventory.component';
import { SupplementDetailsComponent } from './supplement/supplement-sales/supplement-details/supplement-details.component';
import { PatientLaboratoryComponent } from './laboratory/patient-laboratory/patient-laboratory.component';
import { PatientLaboratoryDetailsComponent } from './laboratory/patient-laboratory/patient-laboratory-details/patient-laboratory-details.component';
import { PatientLaboratoryDetailsHistoryComponent } from './laboratory/patient-laboratory/patient-laboratory-details-history/patient-laboratory-details-history.component';
import { OutsidePatientLaboratoryComponent } from './laboratory/outside-patient-laboratory/outside-patient-laboratory.component';
import { PatientMedicCareComponent } from './doctor/patient-medic-care/patient-medic-care.component';
import { LaboratoryTestDetailsComponent } from './laboratory/laboratory-test-details/laboratory-test-details.component';
import { LaboratoryTestComponent } from './laboratory/laboratory-test/laboratory-test.component';
import { PatientOpdDetailsComponent } from './patient-opd-details/patient-opd-details.component';
import { DashboardNavbarComponent } from './dashboard/dashboard-navbar/dashboard-navbar.component';
import { DashboardFooterComponent } from './dashboard/dashboard-footer/dashboard-footer.component';
import { DashboardSideNavbarComponent } from './dashboard/dashboard-side-navbar/dashboard-side-navbar.component';
import { PatientSidebarComponent } from './patient/patient-sidebar/patient-sidebar.component';
import { DoctorSidebarComponent } from './doctor/doctor-sidebar/doctor-sidebar.component';
import { LaboratorySidebarComponent } from './laboratory/laboratory-sidebar/laboratory-sidebar.component';
import { SupplementSidebarComponent } from './supplement/supplement-sidebar/supplement-sidebar.component';
import { SupplementsReportsComponent } from './supplement/supplements-reports/supplements-reports.component';
import { DailySupplementReportsComponent } from './supplement/supplements-reports/daily-supplement-reports/daily-supplement-reports.component';
import { GeneralSupplementReportsComponent } from './supplement/supplements-reports/general-supplement-reports/general-supplement-reports.component';
import { GenerateSupplemnetReportsComponent } from './supplement/supplements-reports/generate-supplemnet-reports/generate-supplemnet-reports.component';
import { DailySupplementDailyDetailsComponent } from './supplement/supplements-reports/daily-supplement-daily-details/daily-supplement-daily-details.component';
import { MedicalDiagnosisHistoryComponent } from './doctor/medical-diagnosis-history/medical-diagnosis-history.component';
import { PatientOpdDetailsHistoryComponent } from './patient/patient-opd-details-history/patient-opd-details-history.component';
import { LoginComponent } from './login/login.component';
import { CardfeesComponent } from './setting/cardfees/cardfees.component';
import { CardfeeslogsComponent } from './setting/cardfees/cardfeeslogs/cardfeeslogs.component';
import { AuthlogsInterceptor } from './interceptors/authlogs.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingComponent,
    SupplementComponent,
    DoctorComponent,
    PatientComponent,
    LaboratoryComponent,
    UsersComponent,
    RegionComponent,
    HospitalComponent,
    OpdVitalsComponent,
    SrttingdashboardComponent,
    SrttingsidebarComponent,
    TopnavbarComponent,
    FooterComponent,
    UsermanagementComponent,
    UserdetailsComponent,
    GroupsComponent,
    HospitalDetailsComponent,
    PatientDietarySupplementComponent,
    PatientDietarySupplementDetailsComponent,
    SupplementSalesComponent,
    StockSupplementComponent,
    ProductSalesComponent,
    SupplementInventoryComponent,
    SupplementDetailsComponent,
    PatientLaboratoryComponent,
    PatientLaboratoryDetailsComponent,
    PatientLaboratoryDetailsHistoryComponent,
    OutsidePatientLaboratoryComponent,
    PatientMedicCareComponent,
    LaboratoryTestDetailsComponent,
    LaboratoryTestComponent,
    PatientOpdDetailsComponent,
    DashboardNavbarComponent,
    DashboardFooterComponent,
    DashboardSideNavbarComponent,
    PatientSidebarComponent,
    DoctorSidebarComponent,
    LaboratorySidebarComponent,
    SupplementSidebarComponent,
    SupplementsReportsComponent,
    DailySupplementReportsComponent,
    GeneralSupplementReportsComponent,
    GenerateSupplemnetReportsComponent,
    DailySupplementDailyDetailsComponent,
    MedicalDiagnosisHistoryComponent,
    PatientOpdDetailsHistoryComponent,
    LoginComponent,
    CardfeesComponent,
    CardfeeslogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    //DataTablesModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthlogsInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
