import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "authpage", redirectTo: "authpage/home", pathMatch: "full" },

  { path: "", redirectTo: "authpage/home", pathMatch: "full" },
  {
    path: "admindashboard",
    loadChildren: () =>
      import("./admin-dashboard/admin-dashboard.module").then(
        m => m.AdminDashboardModule
      )
  },
  {
    path: "customersdashboard",
    loadChildren: () =>
      import("./customers-dashboard/customer-dashboard.module").then(
        m => m.CustomerDashboardModule
      )
  },
  {
    path: "financedashboard",
    loadChildren: () =>
      import("./finance-dashboard/finance-dashboard.module").then(
        m => m.FinanceDashboardModule
      )
  },
  {
    path: "frontdesk",
    loadChildren: () =>
      import("./front-desk/front-desk.module").then(m => m.FrontDeskModule)
  },
  {
    path: "managementdashboard",
    loadChildren: () =>
      import("./management-dashboard/management-dashboard.module").then(
        m => m.ManagementDashboardModule
      )
  },
  {
    path: "productiondashboard",

    loadChildren: () =>
      import("./production-dashboard/production-dashboard.module").then(
        m => m.ProductionDashboardModule
      )
  },
  {
    path: "qadashboard",

    loadChildren: () =>
      import("./qa-dashboard/qa-dashboard.module").then(
        m => m.QaDashboardModule
      )
  },
  {
    path: "salesmarketdashboard",

    loadChildren: () =>
      import("./sales-market-dashboard/sales-market-dashboard.module").then(
        m => m.SalesMarketDashboardModule
      )
  },
  {
    path: "suppliersdashboard",

    loadChildren: () =>
      import("./suppliers-dashboard/suppliers-dashboard.module").then(
        m => m.SuppliersDashboardModule
      )
  },
  {
    path: "translogisticsdashboard",

    loadChildren: () =>
      import(
        "./trans-logistics-dashboard/trans-logistics-dashboard.module"
      ).then(m => m.TransLogisticsDashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
