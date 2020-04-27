import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDashboardRoutingModule } from './customer-dashboard-routing.module';

import { SharedModule } from '../shared/shared.module';
import { PagesCoreCustomerComponent } from './pages-core/pages-core-customer.component';

import { AuthenticationComponent } from './components/authentication/authentication.component';
import { UpdateCustomerProfileComponent } from './components/update-customer-profile/update-customer-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeftPanelCustomerComponent } from './common/left-panel/left-panel-customer.component';
import { RightPanelCustomerComponent } from './common/right-panel/right-panel-customer.component';
import { HeaderCustomerComponent } from './common/header/header-customer.component';
import { ContentSectionCustomerComponent } from './content-section/content-section-customer.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { CustomerNotificationsComponent } from './components/customer-notifications/customer-notifications.component';
import { ClientDetailsComponent } from './components/customer-dashboard/client-details/client-details.component';


@NgModule({
  declarations: [
    PagesCoreCustomerComponent,
    LeftPanelCustomerComponent,
    RightPanelCustomerComponent,
    HeaderCustomerComponent,
    ContentSectionCustomerComponent,
    AuthenticationComponent,
    CustomerDashboardComponent,
    UpdateCustomerProfileComponent,
    CustomerNotificationsComponent,
    ClientDetailsComponent,

  ],
  imports: [
    CommonModule,
    CustomerDashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CustomerDashboardModule { }
