import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersDashboardRoutingModule } from './suppliers-dashboard-routing.module';

import { SharedModule } from '../shared/shared.module';
import { PagesCoreSuppliersComponent } from './pages-core/pages-core-suppliers.component';

import { AuthenticationComponent } from './components/authentication/authentication.component';
import { UpdateSuppliersProfileComponent } from './components/update-suppliers-profile/update-suppliers-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeftPanelSuppliersComponent } from './common/left-panel/left-panel-suppliers.component';
import { RightPanelSuppliersComponent } from './common/right-panel/right-panel-suppliers.component';
import { HeaderSuppliersComponent } from './common/header/header-suppliers.component';
import { ContentSectionSuppliersComponent } from './content-section/content-section-suppliers.component';
import { SuppliersDashboardComponent } from './components/suppliers-dashboard/suppliers-dashboard.component';
import { SuppliersNotificationsComponent } from './components/suppliers-notifications/suppliers-notifications.component';


@NgModule({
  declarations: [
    PagesCoreSuppliersComponent,
    LeftPanelSuppliersComponent,
    RightPanelSuppliersComponent,
    HeaderSuppliersComponent,
    ContentSectionSuppliersComponent,
    AuthenticationComponent,
    SuppliersDashboardComponent,
    UpdateSuppliersProfileComponent,
    SuppliersNotificationsComponent,

  ],
  imports: [
    CommonModule,
    SuppliersDashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class SuppliersDashboardModule { }
