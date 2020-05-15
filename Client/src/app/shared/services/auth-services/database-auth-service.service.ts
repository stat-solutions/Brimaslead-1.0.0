import { Injectable } from '@angular/core';
import { DbServiceService } from '../firestore-db/db-service.service';
import { AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { from, throwError, Observable, forkJoin, concat,of, combineLatest } from 'rxjs';
import { catchError, map, mapTo, concatMap, combineAll, tap } from 'rxjs/operators';
import { UserData } from '../../models/user-profile/user-data';
import * as firebase from 'firebase';

type CollectionPredicate<T> = string |AngularFirestoreCollection<T>;
type DocPredicate<T> = string | AngularFirestoreDocument<T>;

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {

  constructor(private db:DbServiceService) { }
  
 
  
  addDoc<UserData>(ref: CollectionPredicate<UserData>, mydata:UserData) {
    from(this.db.col(ref).add(mydata)).pipe(
      catchError((error) => {
        return throwError(error.message);
      }));
  }



  addEmployeeeProfile(ref: DocPredicate<UserData>, mydata:UserData, credentials: firebase.auth.UserCredential): Observable<firebase.auth.UserCredential> {
    
  const departmentsRefs$=this.db.colId$('department',x=>x.where('departmentName', '==', mydata.department));
  const roleRefs$=this.db.colId$('userAccessRights',x=>x.where('accessType', '==','employeeAccess')); 

    return combineLatest([roleRefs$,departmentsRefs$]).pipe(

       map( x => { this.db.doc(ref).set({ ...mydata, departmentRef: this.reference(`department/${x[1][0]}`) ,accessRef: this.reference( `userAccessRights/${x[0][0]}`), createdAt: this.serverTimeStamp, updatedAt: this.serverTimeStamp }) }),
         mapTo(credentials),
        catchError((error) => {
          return throwError(error.message);
        }
    ));
    
    // return of(credentials);
  }
  
  addCustomerProfile(ref: DocPredicate<UserData>, mydata:UserData, credentials: firebase.auth.UserCredential): Observable<firebase.auth.UserCredential>{
    return of(credentials);
  }
 
  
  //Firebase Server Timestamp

  get serverTimeStamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }
 
  reference(fields:string) {
    return new firebase.firestore.FieldPath(fields);
  }

  
}
