import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorServiceService implements HttpInterceptor {

  constructor(
    private authService: AuthServiceService,
    private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log(request.url.split('/')[5]);
    // LoginComponent
    if (
      request.url.split('/')[5] !== 'registersmartsaver'
      ||
      request.url.split('/')[5] !== 'registersmartagent'
      ||
      request.url.split('/')[5] !== 'registersmartvendor'
      ||
      request.url.split('/')[5] !== 'registergroupbox'
      ||
      request.url.split('/')[5] !== 'registerboxforGod'
      ||
      request.url.split('/')[5] !== 'registerschoolfeesbox'
      ||
      request.url.split('/')[5] !== 'registeradmin'
      ||
      request.url.split('/')[5] !== 'getNumberOfItems'
      ) {

    if (this.authService.isLoggedIn()) {

        request = this.addToken(request, this.authService.getJwtToken());
      }

    return next.handle(request).pipe(catchError(error => {

          return throwError(error);

      }));
    } else {

      this.router.navigate(['authpage/loginpage']);

    }
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

}
