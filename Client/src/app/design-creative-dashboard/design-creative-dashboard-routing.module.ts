import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesCoreDesignCreativeComponent } from './pages-core/pages-core-design-creative.component';
import { DesignCreativeDashboardComponent } from './components/design-creative-dashboard/design-creative-dashboard.component';
import { DesignCreativeNotificationsComponent } from './components/design-creative-notifications/design-creative-notifications.component';
import { DesignCreativeProfileComponent } from './components/design-creative-profile/design-creative-profile.component';
import { DesignCreativeReportsComponent } from './components/design-creative-reports/design-creative-reports.component';
import { CreatedDesignsComponent } from './components/created-designs/created-designs.component';
import { QualityAssuranceComponent } from './components/quality-assurance/quality-assurance.component';

const routes: Routes = [
  {
    path: "",
    component: PagesCoreDesignCreativeComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "designcreative",
      },
      {
        path: "designcreative",
        component: DesignCreativeDashboardComponent,
      },
      {
        path: "createddesigns",
        component: CreatedDesignsComponent,
      },
      {
        path: "qualityassurance",
        component: QualityAssuranceComponent,
      },
      {
        path: "designcreativereports",
        component: DesignCreativeReportsComponent,
      },
      {
        path: "designcreativeprofile",
        component: DesignCreativeProfileComponent,
      },
      {
        path: "designcreativenotifications",
        component: DesignCreativeNotificationsComponent,
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignCreativeDashboardRoutingModule { }
