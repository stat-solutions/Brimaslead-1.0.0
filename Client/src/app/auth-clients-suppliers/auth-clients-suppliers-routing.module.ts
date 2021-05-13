import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { SupplierRegisterComponent } from './supplier-register/supplier-register.component';
import { HomeComponent } from './home/home.component';
import { AuthClientsSuppliersComponent } from './auth-clients-suppliers.component';
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";

const routes: Routes = [
  {
    path: "authpage",
    component: AuthClientsSuppliersComponent,
    children: [
      {
        path: "home",
        component: HomeComponent,
      },
      { path: "loginpage", component: LoginComponent },
      { path: "forgotpassword", component: ForgotPasswordComponent },
      { path: "changepassword", component: ChangePasswordComponent },
      { path: "register-client", component: CustomerRegisterComponent },
      { path: "registersupplier", component: SupplierRegisterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthClientsSuppliersRoutingModule { }

