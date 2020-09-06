import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, catchError, mapTo, concatMap } from 'rxjs/operators';
import { Observable, throwError, from } from 'rxjs';
import { AuthUser } from '../../models/user-profile/auth-user';
import { UserData } from '../../models/user-profile/user-data';
import * as firebase from 'firebase';
import { DatabaseServiceService } from './database-auth-service.service';
import { CustomerData } from '../../models/user-profile/client_data.model';
import { SupplierData } from '../../models/user-profile/supplier-data';

@Injectable({
  providedIn: 'root',
})
export class EmailServiceService {
  public authState$: Observable<any | null>;

  constructor(private afa: AngularFireAuth, private db: DatabaseServiceService) {
    this.authState$ = this.afa.authState;
  }

   // create auth user on firebase
   createAuthUser = (
    email: string,
    pwd: string
  ): Observable<firebase.auth.UserCredential> => {
    return from(this.afa.auth.createUserWithEmailAndPassword(email, pwd));
  }



  signUpEmployee(
    user: AuthUser,
    data: UserData
  ): Observable<firebase.auth.UserCredential> {


    // update the Employee profile data on firestore
    const updateDatabaseEmployee = (
      fireUser: firebase.auth.UserCredential,
      _data: UserData
    ): Observable<firebase.auth.UserCredential> => {
      return from(
        this.db.addEmployeeeProfile(
          `employeeProfile/${fireUser.user.uid}`,
          _data,
          fireUser
        )
      ).pipe(mapTo(fireUser));
    };

 // update the auth user displayname
    const updateAuthUser = (
  fireUser: firebase.auth.UserCredential,
  _data: UserData
): Observable<firebase.auth.UserCredential> => {
  return from(
    fireUser.user.updateProfile({
      displayName: _data.userName,
      photoURL: 'Missing',
    })
  ).pipe(mapTo(fireUser));
};
 //  update the user profile data on firestore
    const updateCommonUserEmployee = (
  fireUser: firebase.auth.UserCredential,
  _data: AuthUser
): Observable<firebase.auth.UserCredential> => {
  return from(
    this.db.addCommonUserEmployee(
      `commonUser/${fireUser.user.uid}`,
      _data,
      fireUser
    )
  ).pipe(mapTo(fireUser));
};


    return this.createAuthUser(user.email, user.password).pipe(
      concatMap((firstReturn) => updateAuthUser(firstReturn, data)),
      concatMap((thirdReturn) => this.sendVerificationEmail(thirdReturn)),
      concatMap((thirdReturn) => updateDatabaseEmployee(thirdReturn, data)),
      concatMap((thirdReturn) => updateCommonUserEmployee(thirdReturn, user)),
      catchError((error) => {
        return throwError(error.message);
      })
    );
  }


  signUpCustomerByHimself(
    user: AuthUser,
    data: CustomerData
  ): Observable<firebase.auth.UserCredential> {

    // update the auth user displayname
    const updateAuthUserCustomer = (
      fireUser: firebase.auth.UserCredential,
      _data: CustomerData
    ): Observable<firebase.auth.UserCredential> => {
      console.log(_data);
      return from(
        fireUser.user.updateProfile({
          displayName: _data.clientName,
          photoURL: 'Missing',
        })
      ).pipe(mapTo(fireUser));
    };

    // update the user profile data on firestore
    const updateDatabaseCustomer = (
      fireUser: firebase.auth.UserCredential,
      _data: CustomerData
    ): Observable<firebase.auth.UserCredential> => {
      return from(
        this.db.addCustomerProfile(
          `customerProfile/${fireUser.user.uid}`,
          _data,
          fireUser
        )
      ).pipe(mapTo(fireUser));
    };

    //  update the user profile data on firestore
    const updateCommonUserCustomer = (
      fireUser: firebase.auth.UserCredential,
      _data: AuthUser
    ): Observable<firebase.auth.UserCredential> => {
      return from(
        this.db.addCommonUserCustomer(
          `commonUser/${fireUser.user.uid}`,
          _data,
          fireUser
        )
      ).pipe(mapTo(fireUser));
    };



    return this.createAuthUser(user.email, user.password).pipe(
      concatMap((firstReturn) => updateAuthUserCustomer(firstReturn, data)),
      concatMap((thirdReturn) => this.sendVerificationEmail(thirdReturn)),
      concatMap((thirdReturn) => updateDatabaseCustomer(thirdReturn, data)),
      concatMap((thirdReturn) => updateCommonUserCustomer(thirdReturn, user)),
      catchError((error) => {
        return throwError(error.message);
      })
    );
  }

  signUpSupplier(
    user: AuthUser,
    data: SupplierData
  ): Observable<firebase.auth.UserCredential> {

    // update the auth user displayname
    const updateAuthUserSupplier = (
      fireUser: firebase.auth.UserCredential,
      _data: SupplierData
    ): Observable<firebase.auth.UserCredential> => {
      console.log(_data);
      return from(
        fireUser.user.updateProfile({
          displayName: _data.supplierName,
          photoURL: 'Missing',
        })
      ).pipe(mapTo(fireUser));
    };

    // update the user profile data on firestore
    const updateDatabaseSupplier = (
      fireUser: firebase.auth.UserCredential,
      _data: SupplierData
    ): Observable<firebase.auth.UserCredential> => {
      return from(
        this.db.addSupplierProfile(
          `supplierProfile/${fireUser.user.uid}`,
          _data,
          fireUser
        )
      ).pipe(mapTo(fireUser));
    };

    //  update the user profile data on firestore
    const updateCommonUserSupplier = (
      fireUser: firebase.auth.UserCredential,
      _data: AuthUser
    ): Observable<firebase.auth.UserCredential> => {
      return from(
        this.db.addCommonUserSupplier(
          `commonUser/${fireUser.user.uid}`,
          _data,
          fireUser
        )
      ).pipe(mapTo(fireUser));
    };



    return this.createAuthUser(user.email, user.password).pipe(
      concatMap((firstReturn) => updateAuthUserSupplier(firstReturn, data)),
      concatMap((thirdReturn) => this.sendVerificationEmail(thirdReturn)),
      concatMap((thirdReturn) => updateDatabaseSupplier(thirdReturn, data)),
      concatMap((thirdReturn) => updateCommonUserSupplier(thirdReturn, user)),
      catchError((error) => {
        return throwError(error.message);
      })
    );
  }


//   signUpSupplier(
//     user: AuthUser,
//     data: UserData
//   ): Observable<firebase.auth.UserCredential> {

//  // update the auth user displayname
//  const updateAuthUser = (
//   fireUser: firebase.auth.UserCredential,
//   _data: any
// ): Observable<firebase.auth.UserCredential> => {
//   return from(
//     fireUser.user.updateProfile({
//       displayName: _data.userName,
//       photoURL: 'Missing',
//     })
//   ).pipe(mapTo(fireUser));
// };


//     // update the Employee profile data on firestore
//  const updateDatabase = (
//       fireUser: firebase.auth.UserCredential,
//       _data: UserData
//     ): Observable<firebase.auth.UserCredential> => {
//       return from(
//         this.db.addEmployeeeProfile(
//           `employeeProfile/${fireUser.user.uid}`,
//           _data,
//           fireUser
//         )
//       ).pipe(mapTo(fireUser));
//     };

//  return this.createAuthUser(user.email, user.password).pipe(
//       concatMap((firstReturn) => updateAuthUser(firstReturn, data)),
//       concatMap((thirdReturn) => this.sendVerificationEmail(thirdReturn)),
//       concatMap((thirdReturn) => updateDatabase(thirdReturn, data)),
//       catchError((error) => {
//         return throwError(error.message);
//       })
//     );
//   }

  // send verifcation email to current user
  sendVerificationEmail(
    fireUserCredentials: firebase.auth.UserCredential
  ): Observable<firebase.auth.UserCredential> {
    return this.fromFirebaseAuthPromise(
      this.afa.auth.currentUser.sendEmailVerification()
    ).pipe(mapTo(fireUserCredentials));
  }

  private fromFirebaseAuthPromise(promise): Observable<any> {
    return from(promise);
  }

  signIn(user: AuthUser): Observable<firebase.User> {
    return from(
      this.afa.auth.signInWithEmailAndPassword(user.email, user.password)
    ).pipe(map((x) => x.user));
  }

  signOut(): Observable<any> {
    return this.fromFirebaseAuthPromise(this.afa.auth.signOut());
  }

  changePassword(newPwd: string): Observable<any> {
    return this.fromFirebaseAuthPromise(
      this.afa.auth.currentUser.updatePassword(newPwd)
    );
  }
}
