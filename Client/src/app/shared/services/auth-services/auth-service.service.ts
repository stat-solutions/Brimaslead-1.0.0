   import { Injectable } from '@angular/core';
   import { Observable, throwError } from 'rxjs';
   import { tap, catchError, mapTo, map } from 'rxjs/operators';
   import { AuthUser } from '../../models/user-profile/auth-user';
   import { EmailServiceService } from './email-service.service';
   import { DatabaseServiceService } from './database-auth-service.service';
   import { UserData } from '../../models/user-profile/user-data';
   import { Department } from '../../../auth/register/register.component';
import { DbServiceService } from "../firestore-db/DbServiceService";
import { CustomerData } from '../../models/user-profile/client_data.model';


   @Injectable({
     providedIn: 'root'
   })
   export class AuthServiceService {

      displayNamex?: string;
      photoURLx?: string;



   constructor(

   private sendEmail: EmailServiceService,
   private db: DbServiceService
   ) {

   }
    
   
   logoutUser(){
      
      this.sendEmail.signOut();
      
   }
    
    
    
   getAllDepartments():Observable<Department[]>{
      return this.db.col$('department');
    }
    
   registerEmployee(authUser: AuthUser, userProfile: UserData): Observable<string> {

  return this. sendEmail.signUpEmployee(authUser, userProfile).pipe(
        mapTo('User created successfully'),

        catchError((errorc) => {
         console.log(errorc);
         return     throwError(errorc);
           }));

      }
     
       registerCustomer(authUser: AuthUser, userProfile: CustomerData): Observable<string>{
         return this. sendEmail.signUpCustomerByHimself(authUser, userProfile).pipe(
            mapTo('User created successfully'),
    
            catchError((errorc) => {
             console.log(errorc);
             return     throwError(errorc);
               }));
      }

       registerSupplier(authUser: AuthUser, userProfile: UserData): Observable<string>{
         return this. sendEmail.signUpSupplier(authUser, userProfile).pipe(
            mapTo('User created successfully'),
    
            catchError((errorc) => {
             console.log(errorc);
             return     throwError(errorc);
               }));
         
         
      }
   
       loginEmployee(userCredetials:AuthUser):Observable<firebase.User> {
          return this.sendEmail.signIn(userCredetials);
       }

   }


