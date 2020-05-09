   import { Injectable } from '@angular/core';
   import { environment } from 'src/environments/environment';
   import { Router } from '@angular/router';
   import { FormGroup } from '@angular/forms';
   import { Observable, throwError, of, BehaviorSubject, combineLatest, from } from 'rxjs';


   import { Tokens } from '../../models/other-models/tokens';

   import { map, tap, catchError, mapTo, finalize } from 'rxjs/operators';
   import { CountryRegions } from '../../models/other-models/country-regions';
   import { UserRole } from '../../models/user-profile/user-role';
   import { auth } from 'firebase/app';



   import { switchMap } from 'rxjs/operators';
   import { AuthUser } from '../../models/user-profile/auth-user';
   import * as firebase from 'firebase';
   import { BinaryDataServiceService } from './binary-data-service.service';
   import { EmailServiceService } from './email-service.service';
   import { DatabaseServiceService } from './database-service.service';
   import { stringify } from 'querystring';
   import { error } from '@angular/compiler/src/util';
   import { UserData } from '../../models/user-profile/user-data';



   @Injectable({
     providedIn: 'root'
   })
   export class AuthServiceService {

      displayNamex?: string;
      photoURLx?: string;



   constructor(

   private router: Router,
   private uploadPhotos: BinaryDataServiceService,
   private sendEmail: EmailServiceService,
   private db: DatabaseServiceService
   ) {

   }

   async registerCustomer(_postData: any) {}

   async registerSupplier(_postData: any) {}



   registerEmployee(authUser: AuthUser, userProfile: UserData): Observable<string> {

  return this. sendEmail.signUp(authUser, userProfile).pipe(

         tap(x => console.log (x)),

        mapTo('User created successfully'),

        catchError((errorc) => {
         console.log(errorc);
         return     throwError(errorc);
           }));




      }



      // return new Promise<string>((resolve, next) => {
      //   this.sendEmail.signUp(authUser,userProfile).then(
      //     result => {
      //        this.uploadPhotos.uploadImage(postData.photo, result).then(
      //          url => {
      //            postData.photo =  url;
      //            console.log(postData);
      //            resolve(`${'You were successfully Registered!!.'} ','
      //            ${'Please first login into your email and verify it then you can proceed to login after verification. Thank you!'}`);
      //                  }
      //            ).catch( error => next(error));
      //                                                                                             }
      //       ).catch(error => next(error));

      //                                                                                            });











   }


