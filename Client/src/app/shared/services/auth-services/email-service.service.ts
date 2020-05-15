import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { map, catchError, mapTo, concatMap } from "rxjs/operators";
import { Observable, throwError, from } from "rxjs";
import { AuthUser } from "../../models/user-profile/auth-user";
import { UserData } from "../../models/user-profile/user-data";
import * as firebase from "firebase";
import { DatabaseServiceService } from './database-auth-service.service';

@Injectable({
  providedIn: "root",
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
  };
   
      // update the auth user displayname
       updateAuthUser = (
        fireUser: firebase.auth.UserCredential,
        _data: UserData
      ): Observable<firebase.auth.UserCredential> => {
        return from(
          fireUser.user.updateProfile({
            displayName: _data.userName,
            photoURL: "Missing",
          })
        ).pipe(mapTo(fireUser));
      };
  
   
  signUpEmployee(
    user: AuthUser,
    data: UserData
  ): Observable<firebase.auth.UserCredential> {
    
 
    // update the Employee profile data on firestore
    const updateDatabase = (
      fireUser: firebase.auth.UserCredential,
      _data: UserData
    ): Observable<firebase.auth.UserCredential> => {
      return from(
        this.db.addEmployeeeProfile(
          `employeeData/${fireUser.user.uid}`,
          _data,
          fireUser
        )
      ).pipe(mapTo(fireUser));
    };

    return this.createAuthUser(user.email, user.password).pipe(
      concatMap((firstReturn) => this.updateAuthUser(firstReturn, data)),
      concatMap((thirdReturn) => this.sendVerificationEmail(thirdReturn)),
      concatMap((thirdReturn) => updateDatabase(thirdReturn, data)),
      catchError((error) => {
        return throwError(error.message);
      })
    );
  }


  signUpCustomerByHimself(
    user: AuthUser,
    data: UserData
  ): Observable<firebase.auth.UserCredential> {
   
    // update the user profile data on firestore
    const updateDatabase = (
      fireUser: firebase.auth.UserCredential,
      _data: UserData
    ): Observable<firebase.auth.UserCredential> => {
      return from(
        this.db.addCustomerProfile(
          `customerData/${fireUser.user.uid}`,
          _data,
          fireUser
        )
      ).pipe(mapTo(fireUser));
    };

    return this.createAuthUser(user.email, user.password).pipe(
      concatMap((firstReturn) => this.updateAuthUser(firstReturn, data)),
      concatMap((thirdReturn) => this.sendVerificationEmail(thirdReturn)),
      concatMap((thirdReturn) => updateDatabase(thirdReturn, data)),
      catchError((error) => {
        return throwError(error.message);
      })
    );
  }

  signUpSupplier(
    user: AuthUser,
    data: UserData
  ): Observable<firebase.auth.UserCredential> {

 
    // update the Employee profile data on firestore
    const updateDatabase = (
      fireUser: firebase.auth.UserCredential,
      _data: UserData
    ): Observable<firebase.auth.UserCredential> => {
      return from(
        this.db.addEmployeeeProfile(
          `employeeData/${fireUser.user.uid}`,
          _data,
          fireUser
        )
      ).pipe(mapTo(fireUser));
    };

    return this.createAuthUser(user.email, user.password).pipe(
      concatMap((firstReturn) => this.updateAuthUser(firstReturn, data)),
      concatMap((thirdReturn) => this.sendVerificationEmail(thirdReturn)),
      concatMap((thirdReturn) => updateDatabase(thirdReturn, data)),
      catchError((error) => {
        return throwError(error.message);
      })
    );
  }

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
