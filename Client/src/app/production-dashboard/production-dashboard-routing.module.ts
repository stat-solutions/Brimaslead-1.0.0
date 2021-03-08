import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesCoreProductionComponent } from './pages-core/pages-core-production.component';
import { ProductionDashboardComponent } from './components/production-dashboard/production-dashboard.component';
import { ProductionProfileComponent } from './components/production-profile/production-profile.component';
import { ProductionNotificationsComponent } from './components/production-notifications/production-notifications.component';
import { DesignImplementationComponent } from './components/design-implementation/design-implementation.component';
import { ProductionReportsComponent } from './components/production-reports/production-reports.component';

const routes: Routes = [
  {
    path: "",
    component: PagesCoreProductionComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "production",
      },
      {
        path: "production",
        component: ProductionDashboardComponent,
      },
      {
        path: "designimplementation",
        component: DesignImplementationComponent,
      },
      {
        path: "productionreports",
        component: ProductionReportsComponent,
      },
      {
        path: "productionprofile",
        component: ProductionProfileComponent,
      },
      {
        path: "productionnotifications",
        component: ProductionNotificationsComponent,
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionDashboardRoutingModule { }
