import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesCoreQaComponent } from './pages-core/pages-core-qa.component';
import { QaDashboardComponent } from './components/qa-dashboard/qa-dashboard.component';
import { UpdateQaProfileComponent } from './components/update-qa-profile/update-qa-profile.component';
import { QaNotificationsComponent } from './components/qa-notifications/qa-notifications.component';

const routes: Routes = [
  {
    path: '',
    component: PagesCoreQaComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },

      {
        path: 'dashboardqa',
       component: QaDashboardComponent,
      },
      {
        path: 'updateqaprofile',
       component: UpdateQaProfileComponent,
      }
      ,
      {
        path: 'notifications',
       component: QaNotificationsComponent,
      }

    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QaDashboardRoutingModule { }
