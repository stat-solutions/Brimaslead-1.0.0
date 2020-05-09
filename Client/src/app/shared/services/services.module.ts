import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from './auth-services/auth-service.service';
import { LayoutService } from './layout.service';
import { RequestInterceptorServiceService } from './request-interceptor-service.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
  ]
})
export class ServicesModule {}
