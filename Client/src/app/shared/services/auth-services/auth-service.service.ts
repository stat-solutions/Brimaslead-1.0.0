   import { Injectable } from '@angular/core';
   import { Observable, throwError } from 'rxjs';
   import { catchError, map, mapTo, tap } from 'rxjs/operators';
   import { Department } from '../../../auth/register/register.component';
import { HttpClient, HttpHeaders,  HttpErrorResponse, HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';
import { RegisterUser } from '../../models/register';
import { Tokens } from '../../models/tokens';
import { UserRole } from '../../models/user-role';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HandleErrorService } from '../other-services/handle-error.service';

   @Injectable({
     providedIn: 'root'
   })
   export class AuthServiceService {




    private API_URL = environment.apiUrl;
    private loggedInUser: string;
    private readonly ACCESS_TOKEN = 'ACCESS TOKEN';
    private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    stations: any;
    constructor(
      private http: HttpClient,
      private jwtHelper: JwtHelperService,
      private handleErrorsNow:HandleErrorService
      ) { }


  getAllDepartments(): Observable<Department[]> {
       return this.http.get<any[]>(`${this.API_URL}/api/auth/userRoles`);
    }

    loginEmployee(postData: any): any {
      console.log(postData);
      return this.http.post<any>(`${this.API_URL}/api/user/loginUser`, postData, this.httpOptions)
        .pipe(
          // tap(tokens => console.log(`${tokens}`)),
          tap(tokens => this.doLoginUser(postData.userEmail, tokens)),
          mapTo(true)
          // catchError(this.handleErrorsNow.handleError)

        );
    }


    loginSupplier(postData: any): any {
      console.log(postData);
      return this.http.post<any>(`${this.API_URL}/api/user/loginUser`, postData, this.httpOptions)
        .pipe(
          // tap(tokens => console.log(`${tokens}`)),
          tap(tokens => this.doLoginUser(postData.userEmail, tokens)),
          mapTo(true)
          // catchError(this.handleErrorsNow.handleError)

        );
    }
    testingTheTablePost(postData: FormGroup): any {
      return this.http.post<any>(`${this.API_URL}/api/auth/testTableData`, postData.value, this.httpOptions)
        .pipe(
          // tap(tokens => console.log(`${tokens}`)),
          // tap(tokens => this.doLoginUser(postData.value.main_contact_number, tokens)),
          // mapTo(true),
          catchError(this.handleErrorsNow.handleError)
        );
    }

    isAgentRegistered(id: string): any {
          //  return of(true);
      const options1 = { params: new HttpParams().set('id', id) };
      return this.http.get<any>(`${this.API_URL}/api/auth/isAgentRegistered`, options1)
        .pipe(
          catchError(this.handleErrorsNow.OtherErrors)
        );
    }
    getRoles(): Observable<UserRole[]> {
      return this.http.get<any[]>(`${this.API_URL}/api/auth/userRoles`);
    }

    // logout(): any {
    //   return this.http.post<any>(`${this.API_URL}/api/auth/logout`, { refreshToken: this.getRefreshToken() })
    //     .pipe(
    //       tap(() => this.doLogoutUser()),
    //       mapTo(true),
    //       catchError(error => {
    //         this.handleLoginError(error);
    //         return of(false);
    //       }
    //       )
    //     );
    // }
         
   registerCustomer(postData: any): any {
// console.log(postData);
    return this.http
    .post<any>(
      `${this.API_URL}/api/user/registerUser`,
      postData,
      this.httpOptions
    )

    .pipe(
      tap(response => console.log(`${response}`)),

      catchError(this.handleErrorsNow.handleError)
    );
  }
       
        
   registerSupplier(postData: any): any {
// console.log(postData);
    return this.http
    .post<any>(
      `${this.API_URL}/api/user/registerUser`,
      postData,
      this.httpOptions
    )

    .pipe(
      tap(response => console.log(`${response}`)),

      catchError(this.handleErrorsNow.handleError)
    );
  }
        
        
   registerEmployee(postData: any): any{
// console.log(postData);
    return this.http
    .post<any>(
      `${this.API_URL}/api/user/registerUser`,
      postData,
      this.httpOptions
    )

    .pipe(
      
      tap(response => console.log(`${response}`)),

      catchError(this.handleErrorsNow.handleError)
    );
  }

    registerUser(postData: RegisterUser): any {
      return this.http.post<any>(`${this.API_URL}/api/user/registerUser`, postData, this.httpOptions)
        .pipe(
          map((res: string) => res),
          tap(res => console.log(`AFTER MAP: ${res}`)),
          catchError(this.handleErrorsNow.handleError)
        );
    }
    changePIN(postData: any): any {
      return this.http.post<any>(`${this.API_URL}/api/user/registerUser`, postData.value, this.httpOptions)
        .pipe(
          // tap(tokens => console.log(`${tokens}`)),
          tap(tokens => this.doLoginUser(postData.value.main_contact_number, tokens)),
          mapTo(true),
          catchError(this.handleErrorsNow.handleError)
        );
    }
    // tslint:disable-next-line: typedef
    doLoginUser(phoneNubmer: string, tokens: Tokens): any {
      this.loggedInUser = phoneNubmer;
      this.storeTokens(tokens);
    }

    doLogoutUser(): any {
      this.loggedInUser = null;
      this.removeTokens();
    }

    private removeTokens(): any {
      localStorage.removeItem(this.ACCESS_TOKEN);
      localStorage.removeItem(this.REFRESH_TOKEN);
    }

    isLoggedIn(): any {
      return !!this.getJwtToken();
    }
    loggedInUserInfo(): any {
      // console.log(this.jwtHelper.decodeToken(this.getJwtToken()));
      const xn = this.jwtHelper.decodeToken(this.getJwtToken());
      return {
        userName: xn.userName,
        userId: xn.userId,
        userPhone: xn.userPhone1,
        userLocationId: xn.locationId,
        userLocationName: xn.locationName.toUpperCase(),
        accessRights: xn.fkAccessRightsIdUser,
      };
    }

    getJwtToken(): any {
      return localStorage.getItem(this.ACCESS_TOKEN);
    }

    refreshToken(): any {
      // console.log('am refreshing');
      return this.http.post<any>(`${this.API_URL}/api/user/userRefreshToken`, {
        refreshToken: this.getRefreshToken()
      }).pipe(tap((tokens: Tokens) => {
        this.storeJwtToken(tokens.accessToken);
      }));
    }

    storeJwtToken(accessToken: string): any {
      localStorage.setItem(this.ACCESS_TOKEN, accessToken);
    }

    getRefreshToken(): any {
      return localStorage.getItem(this.REFRESH_TOKEN);
    }

    private storeTokens(tokens: Tokens): any {
      localStorage.setItem(this.ACCESS_TOKEN, tokens.accessToken);
      localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
    }

}