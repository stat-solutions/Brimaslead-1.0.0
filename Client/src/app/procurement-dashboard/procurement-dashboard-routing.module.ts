import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyItemsComponent } from './components/buy-items/buy-items.component';
import { ProcurementNotificationComponent } from "./components/procurement-notification/procurement-notification.component";
import { ProcurementDashboardComponent } from './components/procurement-dashboard/procurement-dashboard.component';
import { ProcurementProfileComponent } from "./components/procurement-profile/procurement-profile.component";
import { ProcurementReportsComponent } from "./components/procurement-reports/procurement-reports.component";
import { IdentifyComponent } from './components/suppliers-service-providers/identify/identify.component';
import { ManageComponent } from './components/suppliers-service-providers/manage/manage.component';
import { SuppliersServiceProvidersComponent } from './components/suppliers-service-providers/suppliers-service-providers.component';
import { PagesCoreProcurementComponent } from './pages-core/pages-core-procurement.component';


const routes: Routes = [
  {
    path: "",
    component: PagesCoreProcurementComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "procurement",
      },
      {
        path: "procurement",
        component: ProcurementDashboardComponent,
      },
      {
        path: "suppliers-serviceproviders",
        component: SuppliersServiceProvidersComponent,
        children: [
          {
            path: "identify",
            component: IdentifyComponent,
          },
          {
            path: "manage",
            component: ManageComponent,
          },
        ],
      },
      {
        path: "buyitems",
        component: BuyItemsComponent,
      },
      {
        path: "procurementreports",
        component: ProcurementReportsComponent,
      },
      {
        path: "procurementprofile",
        component: ProcurementProfileComponent,
      },
      {
        path: "procurementnotification",
        component: ProcurementNotificationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcurementDashboardRoutingModule { }
