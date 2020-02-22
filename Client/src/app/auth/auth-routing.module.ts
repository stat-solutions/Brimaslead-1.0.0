import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { SupplierRegisterComponent } from './supplier-register/supplier-register.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [

  {
    path: 'authpage', component: AuthComponent, children: [
      { path: 'loginpage', component: LoginComponent },
      { path: 'registeruser', component: RegisterComponent },
      { path: 'registercustomer', component: CustomerRegisterComponent },
      { path: 'registersupplier', component: SupplierRegisterComponent }


    ]
  }
    ,
{
    path: 'layOut', component: LayoutComponent

  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
