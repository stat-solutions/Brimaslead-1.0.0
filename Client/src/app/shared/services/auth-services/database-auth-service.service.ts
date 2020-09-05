import { Injectable } from '@angular/core';
import { DbServiceService } from "../firestore-db/DbServiceService";
import { from, throwError, Observable, combineLatest } from 'rxjs';
import { catchError, map, mapTo } from 'rxjs/operators';
import { UserData } from '../../models/user-profile/user-data';
import * as firebase from 'firebase';
import { CustomerData } from '../../models/user-profile/client_data.model';
import { AuthUser } from '../../models/user-profile/auth-user';
import { CollectionPredicate, DocPredicate } from '../firestore-db/CollectionPredicate';

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {

  constructor(private db: DbServiceService) { }



  addDoc<UserData>(ref: CollectionPredicate<UserData>, mydata: UserData) {
    from(this.db.col(ref).add(mydata)).pipe(
      catchError((error) => {
        return throwError(error.message);
      }));
  }



  addEmployeeeProfile(ref: DocPredicate<UserData>, mydata: UserData, credentials: firebase.auth.UserCredential): Observable<firebase.auth.UserCredential> {

  const departmentsRefs$ = this.db.colId$('department', x => x.where('departmentName', '==', mydata.department));
  const roleRefs$ = this.db.colId$('userAccessRights', x => x.where('accessType', '==', 'employeeAccess'));

  return combineLatest([roleRefs$, departmentsRefs$]).pipe(

       map( x => { this.db.doc(ref).set({ ...mydata,
      departmentColRef: `department/${x[1][0]}`,
      departmentDocRef: x[1][0],
      accessColRef:  `userAccessRights/${x[0][0]}`,
      accessDocRef:  x[0][0],
       createdAt: this.db.serverTimeStamp,
       updatedAt: this.db.serverTimeStamp ,
       approvalStatus: 'NOTAPPROVED'
       }); }),
         mapTo(credentials),
        catchError((error) => {
          return throwError(error.message);
        }
    ));

    // return of(credentials);
  }

  addCustomerProfile(ref: DocPredicate<CustomerData>, mydata: CustomerData, credentials: firebase.auth.UserCredential): Observable<firebase.auth.UserCredential>{

    const roleRefsc$ = this.db.colId$('userAccessRights', x => x.where('accessType', '==', 'customerAccess'));

    return roleRefsc$.pipe(


         map( accessR => { this.db.doc(ref).set({ ...mydata ,
        accessColRef:  `userAccessRights/${accessR[0]}`,
        accessDocRef:  accessR[0],
         createdAt: this.db.serverTimeStamp,
         updatedAt: this.db.serverTimeStamp,
         createdByColRef: `customerProfile/${credentials.user.uid}`,
         createdByDocRef: credentials.user.uid,
         firstApprovedByColRef: `customerProfile/${credentials.user.uid}`,
         firstApprovedByDocRef: credentials.user.uid,
         secondApprovedByColRef: `customerProfile/${credentials.user.uid}`,
         secondApprovedByDocRef: credentials.user.uid,
         empRelationshipColRef: `customerProfile/${credentials.user.uid}`,
         empRelationshipDocRef: credentials.user.uid ,
         approvalStatus: 'NOTAPPROVED'
         }); }),
           mapTo(credentials),
          catchError((error) => {
            return throwError(error.message);
          }
      ));
  }

  // Create commmon users data

  addCommonUserCustomer(ref: DocPredicate<AuthUser>, mydata: AuthUser, credentials: firebase.auth.UserCredential): Observable<firebase.auth.UserCredential>{

    return from(this.db.doc(ref).set({ ...mydata ,
    profileColRef:  `customerProfile/${credentials.user.uid}`,
    profileDocRef: credentials.user.uid,
     createdAt: this.db.serverTimeStamp,
     updatedAt: this.db.serverTimeStamp,
      }),
    ) .pipe(
           mapTo(credentials),
          catchError((error) => {
            return throwError(error.message);
          }
      ));
  }



   // Create commmon users data

   addCommonUserEmployee(ref: DocPredicate<AuthUser>, mydata: AuthUser, credentials: firebase.auth.UserCredential): Observable<firebase.auth.UserCredential>{

    return from(this.db.doc(ref).set({ ...mydata ,
    profileColRef:  `employeeProfile/${credentials.user.uid}`,
    profileDocRef: credentials.user.uid,
    createdAt: this.db.serverTimeStamp,
    updatedAt: this.db.serverTimeStamp,
 }),
    ) .pipe(
           mapTo(credentials),
          catchError((error) => {
            return throwError(error.message);
          }
      ));
  }



  //Firebase Server Timestamp



  reference(fields: string) {
    return new firebase.firestore.FieldPath(fields);
  }


}
