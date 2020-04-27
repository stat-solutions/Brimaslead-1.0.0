import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesCoreProductionComponent } from './pages-core/pages-core-production.component';
import { ProductionDashboardComponent } from './components/production-dashboard/production-dashboard.component';
import { UpdateProductionProfileComponent } from './components/update-production-profile/update-production-profile.component';
import { ProductionNotificationsComponent } from './components/production-notifications/production-notifications.component';

const routes: Routes = [
  {
    path: '',
    component: PagesCoreProductionComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },

      {
        path: 'dashboardproduction',
       component: ProductionDashboardComponent,
      },
      {
        path: 'updateproductionprofile',
       component: UpdateProductionProfileComponent,
      }
      ,
      {
        path: 'notifications',
       component: ProductionNotificationsComponent,
      }

    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionDashboardRoutingModule { }
