import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesCoreSalesMarketComponent } from './pages-core/pages-core-sales-market.component';
import { SalesMarketDashboardComponent } from './components/sales-market-dashboard/sales-market-dashboard.component';
import { SalesMarketNotificationsComponent } from "./components/sales-market-notifications/sales-market-notifications.component";
import { SalesMarketProfileComponent } from "./components/sales-market-profile/sales-market-profile.component";
import { SalesMarketReportsComponent } from "./components/sales-market-reports/sales-market-reports.component";
import { FieldRfqsComponent } from './components/field-rfqs/field-rfqs.component';

const routes: Routes = [
  {
    path: "",
    component: PagesCoreSalesMarketComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "salesmarket",
      },
      {
        path: "salesmarket",
        component: SalesMarketDashboardComponent,
      },
      {
        path: "fieldrfqs",
        component: FieldRfqsComponent,
      },
      {
        path: "salesmarketreports",
        component: SalesMarketReportsComponent,
      },
      {
        path: "salesmarketprofile",
        component: SalesMarketProfileComponent,
      },
      {
        path: "salesnotifications",
        component: SalesMarketNotificationsComponent,
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesMarketDashboardRoutingModule { }
