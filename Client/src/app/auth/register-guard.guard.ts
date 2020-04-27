import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../shared/services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterGuardGuard implements CanActivate {

  constructor(private authService: AuthServiceService, private router: Router) { }

  canActivate(): boolean {

    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['authpage/registeruser']);
    }
    return this.authService.isLoggedIn();
  }

}
