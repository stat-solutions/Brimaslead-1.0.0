import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesCoreFinanceComponent } from './pages-core/pages-core-finance.component';
import { FinanceDashboardComponent } from './components/finance-dashboard/finance-dashboard.component';
import { CostJobsComponent } from './components/cost-jobs/cost-jobs.component';
import { PayServiceProvidersComponent } from './components/pay-service-providers/pay-service-providers.component';
import { ReceivablesPayablesComponent } from './components/receivables-payables/receivables-payables.component';
import { RpClientsComponent } from './components/receivables-payables/rp-clients/rp-clients.component';
import { RpSuppliersComponent } from './components/receivables-payables/rp-suppliers/rp-suppliers.component';
import { FinanceNotificationsComponent } from './components/finance-notifications/finance-notifications.component';
import { FinanceProfileComponent } from './components/finance-profile/finance-profile.component';
import { FinanceReportsComponent } from './components/finance-reports/finance-reports.component';

const routes: Routes = [
  {
    path: "",
    component: PagesCoreFinanceComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "finance",
      },
      {
        path: "finance",
        component: FinanceDashboardComponent,
      },
      {
        path: "costjobs",
        component: CostJobsComponent,
      },
      {
        path: "paybills",
        component: PayServiceProvidersComponent,
      },
      {
        path: "R-and-Ps",
        component: ReceivablesPayablesComponent,
        children: [
          {
            path: "suppliers",
            component: RpSuppliersComponent,
          },
          {
            path: "clients",
            component: RpClientsComponent,
          },
        ],
      },
      {
        path: "financereports",
        component: FinanceReportsComponent,
      },
      {
        path: "financeprofile",
        component: FinanceProfileComponent,
      },
      {
        path: "financenotifications",
        component: FinanceNotificationsComponent,
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceDashboardRoutingModule { }
