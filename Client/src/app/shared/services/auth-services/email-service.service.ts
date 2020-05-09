import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, tap, catchError, mapTo, finalize, mergeMap, concatMap } from 'rxjs/operators';
import { Observable, throwError, of, BehaviorSubject, combineLatest, from } from 'rxjs';
import { AuthUser } from '../../models/user-profile/auth-user';
import { DatabaseServiceService } from './database-service.service';
import { UserData } from '../../models/user-profile/user-data';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { BinaryDataServiceService } from './binary-data-service.service';

@Injectable({
  providedIn: 'root'
})

export class EmailServiceService {

  public authState$: Observable<any | null>;

  private readonly usersCol = 'users';

  constructor(
    private afa: AngularFireAuth, 
    private fts: AngularFirestore,
    private createPhoto:BinaryDataServiceService) {
    this.authState$ = this.afa.authState;
  }

  signIn(user: AuthUser): Observable<any> {
    return this.fromFirebaseAuthPromise(
      this.afa.auth.signInWithEmailAndPassword(user.email, user.password)
    );
  }

  signOut(): Observable<any> {
    return this.fromFirebaseAuthPromise(
      this.afa.auth.signOut()
    );
  }

  signUp(user: AuthUser, data: UserData): Observable<firebase.auth.UserCredential> {



    // create auth user on firebase
    const createAuthUser = (email, pwd): Observable<firebase.auth.UserCredential> => {
      return from(this.afa.auth.createUserWithEmailAndPassword(email, pwd));
    };


    // update the auth user displayname
    const updateAuthUser = (fireUser: firebase.auth.UserCredential, _data: UserData): Observable<firebase.auth.UserCredential> => {
      return from(fireUser.user.updateProfile({
        displayName: _data.userName
      })).pipe(
        mapTo(fireUser)
      );
    };



    return createAuthUser(user.email, user.password).pipe(

      tap((x) => console.log('create auth user', x.user.uid)),

      concatMap((fireUserCredentials: firebase.auth.UserCredential) => updateAuthUser(fireUserCredentials, data).pipe(
        tap(x2 => console.log('auth user info updated', x2.user.displayName))
      )),
      
      concatMap((fireUserCredentials: firebase.auth.UserCredential) => this.createPhoto.uploadImage(data.photo, fireUserCredentials).pipe(
        tap(x2 => console.log('auth user info updated', x2.user.photoURL))
      )),
      concatMap((fireUserCredentials: firebase.auth.UserCredential) => this.sendVerificationEmail(fireUserCredentials).pipe(
        tap(x=>console.log(`the deal is ${x}` ))
      )
      ),

      catchError((error) => {

        return throwError(error.message);
      })
    );
  }


  // send verifcation email to current user
  sendVerificationEmail(fireUserCredentials: firebase.auth.UserCredential): Observable<firebase.auth.UserCredential> {
    return this.fromFirebaseAuthPromise(this.afa.auth.currentUser.sendEmailVerification()

    ).pipe(
     
      mapTo(fireUserCredentials)
    );
  }

  changePassword(newPwd: string): Observable<any> {
    return this.fromFirebaseAuthPromise(
      this.afa.auth.currentUser.updatePassword(newPwd)
    );
  }

  private fromFirebaseAuthPromise(promise): Observable<any> {
    return from(promise);
  }





}
