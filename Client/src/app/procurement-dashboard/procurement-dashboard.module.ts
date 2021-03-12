import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcurementDashboardRoutingModule } from './procurement-dashboard-routing.module';
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { PagesCoreProcurementComponent } from "./pages-core/pages-core-procurement.component";
import { LeftPanelProcurementComponent } from "./common/left-panel/left-panel-procurement.component";
import { RightPanelProcurementComponent } from "./common/right-panel/right-panel-procurement.component";
import { HeaderProcurementComponent } from "./common/header/header-procurement.component";
import { ContentSectionProcurementComponent } from "./content-section/content-section-procurement.component";
import { SuppliersServiceProvidersComponent } from './components/suppliers-service-providers/suppliers-service-providers.component';
import { IdentifyComponent } from './components/suppliers-service-providers/identify/identify.component';
import { ManageComponent } from './components/suppliers-service-providers/manage/manage.component';
import { BuyItemsComponent } from './components/buy-items/buy-items.component';
import { ProcurementDashboardComponent } from './components/procurement-dashboard/procurement-dashboard.component';
import { ProcurementNotificationComponent } from './components/procurement-notification/procurement-notification.component';
import { ProcurementProfileComponent } from './components/procurement-profile/procurement-profile.component';
import { ProcurementReportsComponent } from './components/procurement-reports/procurement-reports.component';


@NgModule({
  declarations: [
    PagesCoreProcurementComponent,
LeftPanelProcurementComponent,
RightPanelProcurementComponent,
HeaderProcurementComponent,
ContentSectionProcurementComponent,
    SuppliersServiceProvidersComponent,
    IdentifyComponent,
    ManageComponent,
    BuyItemsComponent,
    ProcurementDashboardComponent,
    ProcurementNotificationComponent,
    ProcurementProfileComponent,
    ProcurementReportsComponent,
  ],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, ProcurementDashboardRoutingModule],
})
export class ProcurementDashboardModule {}
