import { ComponentFixture } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontDeskLayoutComponent } from './front-desk-layout/front-desk-layout.component';
import { FrontDeskDashboardComponent } from './front-desk-dashboard/front-desk-dashboard.component';
import { LeaveManagementComponent } from './front-desk-dashboard/employee-service/leave-management/leave-management.component';
import { RequestForQuoteComponent } from './front-desk-dashboard/request-for-quote/request-for-quote.component';
import { PayrollModuleComponent } from './front-desk-dashboard/employee-service/payroll-module/payroll-module.component';
// tslint:disable-next-line:max-line-length
import { PerformanceManagementComponent } from './front-desk-dashboard/employee-service/performance-management/performance-management.component';
// tslint:disable-next-line:max-line-length
import { HireComponent } from './front-desk-dashboard/employee-service/hire/hire.component';
import { RfqDetailsComponent } from './front-desk-dashboard/request-for-quote/rfq-details/rfq-details.component';
import { AddRfqItemsComponent } from './front-desk-dashboard/request-for-quote/add-rfq-items/add-rfq-items.component';
import { CreateCatalogItemComponent } from './front-desk-dashboard/create-catalog-item/create-catalog-item.component';
import { CreateClientsComponent } from './front-desk-dashboard/create-clients/create-clients.component';
import { PhoneRfqsComponent } from './front-desk-dashboard/phone-rfqs/phone-rfqs.component';
import { MakeAppointmentComponent } from './front-desk-dashboard/make-appointment/make-appointment.component';
import { FileArchiveComponent } from './front-desk-dashboard/file-archive/file-archive.component';
import { FrontDeskNotificationsComponent } from './front-desk-dashboard/front-desk-notifications/front-desk-notifications.component';
import { FrontDeskProfileComponent } from './front-desk-dashboard/front-desk-profile/front-desk-profile.component';
import { FrontDeskReportsComponent } from './front-desk-dashboard/front-desk-reports/front-desk-reports.component';

const routes: Routes = [
  {
    path: "",
    component: FrontDeskLayoutComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "frontdeskdashboard",
      },
      {
        path: "frontdeskdashboard",
        component: FrontDeskDashboardComponent,
      },
      {
        path: "filearchive",
        component: FileArchiveComponent,
      },
      {
        path: "makeappointment",
        component: MakeAppointmentComponent,
      },
      {
        path: "phonerfqs",
        component: PhoneRfqsComponent,
      },
      {
        path: "createclient",
        component: CreateClientsComponent,
      },
      {
        path: "frontdeskreports",
        component: FrontDeskReportsComponent,
      },
      {
        path: "frontdeskprofile",
        component: FrontDeskProfileComponent,
      },
      {
        path: "frontdesknotifications",
        component: FrontDeskNotificationsComponent,
      },
      {
        path: "createcatalogitem",
        component: CreateCatalogItemComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontDeskRoutingModule { }
