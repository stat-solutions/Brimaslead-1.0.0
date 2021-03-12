import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesCoreSuppliersComponent } from './pages-core/pages-core-suppliers.component';
import { SuppliersDashboardComponent } from './components/suppliers-dashboard/suppliers-dashboard.component';
import { UpdateSuppliersProfileComponent } from './components/update-suppliers-profile/update-suppliers-profile.component';
import { SuppliersNotificationsComponent } from './components/suppliers-notifications/suppliers-notifications.component';

const routes: Routes = [
  {
    path: "",
    component: PagesCoreSuppliersComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "suppliers",
      },
      {
        path: "suppliers",
        component: SuppliersDashboardComponent,
      },
      {
        path: "updatesuppliersprofile",
        component: UpdateSuppliersProfileComponent,
      },
      {
        path: "suppliernotifications",
        component: SuppliersNotificationsComponent,
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersDashboardRoutingModule { }
