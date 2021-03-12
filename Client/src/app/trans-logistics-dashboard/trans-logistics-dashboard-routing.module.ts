import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesCoreTransLogisticsComponent } from './pages-core/pages-core-trans-logistics.component';
import { TransLogisticsDashboardComponent } from './components/trans-logistics-dashboard/trans-logistics-dashboard.component';
import { TransLogisticsProfileComponent } from './components/trans-logistics-profile/trans-logistics-profile.component';
import { TransLogisticsNotificationsComponent } from './components/trans-logistics-notifications/trans-logistics-notifications.component';
import { InvoiceDeliveryComponent } from './components/invoice-delivery/invoice-delivery.component';
import { OrderDeliveryComponent } from './components/order-delivery/order-delivery.component';
import { TransLogisticsReportsComponent } from './components/trans-logistics-reports/trans-logistics-reports.component';

const routes: Routes = [
  {
    path: "",
    component: PagesCoreTransLogisticsComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "translogistics",
      },
      {
        path: "translogistics",
        component: TransLogisticsDashboardComponent,
      },
      {
        path: "orderdelivery",
        component: OrderDeliveryComponent,
      },
      {
        path: "invoicedelivery",
        component: InvoiceDeliveryComponent,
      },
      {
        path: "translogisticsreports",
        component: TransLogisticsReportsComponent,
      },
      {
        path: "translogisticsprofile",
        component: TransLogisticsProfileComponent,
      },
      {
        path: "transnotifications",
        component: TransLogisticsNotificationsComponent,
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransLogisticsDashboardRoutingModule { }
