   import { Injectable } from '@angular/core';
   import { Observable, throwError } from 'rxjs';
   import { catchError, mapTo, tap } from 'rxjs/operators';
   import { AuthUser } from '../../models/user-profile/auth-user';
   import { EmailServiceService } from './email-service.service';
   import { UserData } from '../../models/user-profile/user-data';
   import { Department } from '../../../auth/register/register.component';
   import { DbServiceService } from '../firestore-db/DbServiceService';
   import { CustomerData } from '../../models/user-profile/client_data.model';
   import { SupplierData } from '../../models/user-profile/supplier-data';
import { HttpClient, HttpHeaders,  HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

   @Injectable({
     providedIn: 'root'
   })
   export class AuthServiceService {

      displayNamex?: string;
      photoURLx?: string;
private API_URL = environment.apiUrl;
    private loggedInUser: string;
    private readonly ACCESS_TOKEN = 'ACCESS TOKEN';
    private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };


   constructor(

   private sendEmail: EmailServiceService,
   private db: DbServiceService,
    private http: HttpClient,
      private router: Router,

 
   ) {

   }


   logoutUser() {

      this.sendEmail.signOut();

   }



   getAllDepartments(): Observable<Department[]> {
       return this.http.get<any[]>(`${this.API_URL}/api/auth/userRoles`);
    }

  //  registerEmployee(authUser: AuthUser, userProfile: UserData): Observable<string> {

  // return this. sendEmail.signUpEmployee(authUser, userProfile).pipe(
  //       mapTo('Employee account created successfully'),

  //       catchError((errorc) => {
  //        console.log(errorc);
  //        return     throwError(errorc);
  //          }));

  //     }


  registerEmployee(postData: any): Observable<boolean> {
// console.log(postData);
    return this.http
    .post<boolean>(
      `${this.API_URL}/api/user/registerUser`,
      postData,
      this.httpOptions
    )

    .pipe(
      tap(response => console.log(`${response}`)),

      catchError(this.handleError)
    );
  }

       registerCustomer(authUser: AuthUser, userProfile: CustomerData): Observable<string> {
         return this. sendEmail.signUpCustomerByHimself(authUser, userProfile).pipe(
            mapTo('Customer account created successfully'),

            catchError((errorc) => {
             console.log(errorc);
             return     throwError(errorc);
               }));
      }

       registerSupplier(authUser: AuthUser, userProfile: SupplierData): Observable<string> {
         return this. sendEmail.signUpSupplier(authUser, userProfile).pipe(
            mapTo('Supplier account created successfully'),

            catchError((errorc) => {
             console.log(errorc);
             return     throwError(errorc);
               }));


      }



       loginEmployee(userCredetials:AuthUser):Observable<firebase.User> {
          return this.sendEmail.signIn(userCredetials);
       }

   



  private handleError(errorResponse: HttpErrorResponse) {


    if (errorResponse.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', errorResponse.error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${errorResponse.status}, ` +
          `body was: ${errorResponse.error.error.message}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(`Registration Error!
       ${
         errorResponse.status === 500 ||
         errorResponse.status === 0 ||
         errorResponse.status === 200
           ? 'The Back End was not able to Handle this Request'
           : errorResponse.error.error.message
       }
   `);
  }
}