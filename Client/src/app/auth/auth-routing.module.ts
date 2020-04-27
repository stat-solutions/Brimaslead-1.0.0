import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { SupplierRegisterComponent } from './supplier-register/supplier-register.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth.component';
import { GoogoComponent } from './googo/googo.component';

const routes: Routes = [
  {
    path: "authpage",
    component: AuthComponent,
    children: [
      {
        path: "home",
        component: HomeComponent
      },
      { path: "loginpage", component: LoginComponent },
      { path: "googo", component: GoogoComponent },
      { path: "registeruser", component: RegisterComponent },
      { path: "register-client", component: CustomerRegisterComponent },
      { path: "registersupplier", component: SupplierRegisterComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

