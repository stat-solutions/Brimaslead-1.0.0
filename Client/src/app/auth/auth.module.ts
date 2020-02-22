import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SupplierRegisterComponent } from './supplier-register/supplier-register.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent, SupplierRegisterComponent, CustomerRegisterComponent, LayoutComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgxSpinnerModule,
    AlertModule.forRoot(),
    BsDatepickerModule,
    ReactiveFormsModule,

  ]
})
export class AuthModule { }
