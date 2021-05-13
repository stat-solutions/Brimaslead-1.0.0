import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesCoreQaComponent } from './pages-core/pages-core-qa.component';
import { QaDashboardComponent } from './components/qa-dashboard/qa-dashboard.component';
import { QaNotificationsComponent } from './components/qa-notifications/qa-notifications.component';
import { QaProfileComponent } from './components/qa-profile/qa-profile.component';
import { QaReportsComponent } from './components/qa-reports/qa-reports.component';
import { QualityAssuranceComponent } from './components/quality-assurance/quality-assurance.component';

const routes: Routes = [
  {
    path: "",
    component: PagesCoreQaComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "qa-dashboard",
      },
      {
        path: "qa-dashboard",
        component: QaDashboardComponent,
      },
      {
        path: "qualityassurance",
        component: QualityAssuranceComponent,
      },
      {
        path: "qa-reports",
        component: QaReportsComponent,
      },
      {
        path: "qa-profile",
        component: QaProfileComponent,
      },
      {
        path: "qa-notifications",
        component: QaNotificationsComponent,
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QaDashboardRoutingModule { }
