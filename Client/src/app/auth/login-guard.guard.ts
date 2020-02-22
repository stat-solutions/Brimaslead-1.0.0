import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(private authService: AuthServiceService, private router: Router) { }

  canActivate(): boolean {

    // if (this.authService.isLoggedIn()) {
    //   this.router.navigate(['userDashboard/dashboard']);
    // }
    return this.authService.isLoggedIn();
  }


}
