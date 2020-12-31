import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesCoreadminiComponent } from './pages-core/pages-core-admini.component';
import { AdministrationDashboardComponent } from "./components/administration-dashboard/administration-dashboard.component";
import { AdministrationProfileComponent } from "./components/administration-profile/administration-profile.component";
import { AdminiNotificationsComponent } from './components/admini-notifications/admini-notifications.component';
import { BidPreparationComponent } from './components/bid-preparation/bid-preparation.component';
import { DebtManagementComponent } from './components/debt-management/debt-management.component';
import { ProcurementManagementComponent } from './components/procurement-management/procurement-management.component';
import { RfqPreparationComponent } from './components/rfq-preparation/rfq-preparation.component';
import { StockTakingComponent } from './components/stock-taking/stock-taking.component';
import { AddRfqItemComponent } from './components/rfq-preparation/add-rfq-item/add-rfq-item.component';
import { RfqDetailsComponent } from './components/rfq-preparation/rfq-details/rfq-details.component';
import { RfqsComponent } from './components/rfq-preparation/rfqs/rfqs.component';
import { FrontDeskComponent } from './components/front-desk/front-desk.component';
import { CreateCatalogItemsComponent } from './components/front-desk/create-catalog-items/create-catalog-items.component';
import { CreateClientsComponent } from './components/front-desk/create-clients/create-clients.component';
import { FileAndArchiveComponent } from './components/front-desk/file-and-archive/file-and-archive.component';
import { MakeAppointmentComponent } from './components/front-desk/make-appointment/make-appointment.component';
import { PhoneRfqsComponent } from './components/front-desk/phone-rfqs/phone-rfqs.component';

const routes: Routes = [
  {
    path: "",
    component: PagesCoreadminiComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "administration",
      },

      {
        path: "administration",
        component: AdministrationDashboardComponent,
      },
      {
        path: "rfqpreps",
        component: RfqPreparationComponent,
        children: [
          {
            path: "rfqs",
            component: RfqsComponent,
          },
          {
            path: "addRfqItems",
            component: AddRfqItemComponent,
          },
          {
            path: "rfqdetails",
            component: RfqDetailsComponent,
          },
        ],
      },
      {
        path: "bidpreps",
        component: BidPreparationComponent,
      },
      {
        path: "stocktaking",
        component: StockTakingComponent,
      },
      {
        path: "debtmanagement",
        component: DebtManagementComponent,
      },
      {
        path: "procurement",
        component: ProcurementManagementComponent,
      },
      {
        path: "frontdesk",
        component: FrontDeskComponent,
        children: [
          {
            path: "createcatalogitem",
            component: CreateCatalogItemsComponent,
          },
          {
            path: "createclient",
            component: CreateClientsComponent,
          },
          {
            path: "fileandarchive",
            component: FileAndArchiveComponent,
          },
          {
            path: "makeappointment",
            component: MakeAppointmentComponent,
          },
          {
            path: "phonerfqs",
            component: PhoneRfqsComponent,
          },
        ],
      },
      {
        path: "profile",
        component: AdministrationProfileComponent,
      },
      {
        path: "notifications",
        component: AdminiNotificationsComponent,
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationDashboardRoutingModule {}
