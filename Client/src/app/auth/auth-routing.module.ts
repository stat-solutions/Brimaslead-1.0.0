import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { SupplierRegisterComponent } from './supplier-register/supplier-register.component';
import { AuthComponent } from './auth.component';
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";

const routes: Routes = [
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "loginpage", component: LoginComponent },
      { path: "forgotpassword", component: ForgotPasswordComponent },
      { path: "changepassword", component: ChangePasswordComponent },
      { path: "registeruser", component: RegisterComponent },
      { path: "register-client", component: CustomerRegisterComponent },
      { path: "registersupplier", component: SupplierRegisterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

