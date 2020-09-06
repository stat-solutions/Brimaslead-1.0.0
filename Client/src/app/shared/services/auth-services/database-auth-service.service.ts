import { Injectable } from '@angular/core';
import { DbServiceService } from '../firestore-db/DbServiceService';
import { from, throwError, Observable, combineLatest } from 'rxjs';
import { catchError, map, mapTo } from 'rxjs/operators';
import { UserData } from '../../models/user-profile/user-data';
import * as firebase from 'firebase';
import { CustomerData } from '../../models/user-profile/client_data.model';
import { AuthUser } from '../../models/user-profile/auth-user';
import { CollectionPredicate, DocPredicate } from '../firestore-db/CollectionPredicate';
import { ApprovalDetailsService } from './approval-details.service';
import { SupplierData } from '../../models/user-profile/supplier-data';

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {

  constructor(private db: DbServiceService, private approval: ApprovalDetailsService) { }



  addDoc<UserData>(ref: CollectionPredicate<UserData>, mydata: UserData) {
    from(this.db.col(ref).add(mydata)).pipe(
      catchError((error) => {
        return throwError(error.message);
      }));
  }



  addEmployeeeProfile(ref: DocPredicate<UserData>, mydata: UserData, credentials: firebase.auth.UserCredential):
  Observable<firebase.auth.UserCredential> {

  const departmentsRefs$ = this.db.colId$('department', x => x.where('departmentName', '==', mydata.department));

  const roleRefs$ = this.db.colId$('userAccessRights', x => x.where('accessType', '==', 'employeeAccess'));

  this.approval.firstCreated(credentials.user.uid, credentials.user.uid);

  return combineLatest([roleRefs$, departmentsRefs$]).pipe(

       map( x => { this.db.doc(ref).set({ ...mydata,
      departmentColRef: `department/${x[1][0]}`,
      departmentDocRef: x[1][0],
      accessColRef:  `userAccessRights/${x[0][0]}`,
      accessDocRef:  x[0][0],
      approvalDetailsColRef: `approvalDetails/${credentials.user.uid}`,
      approvalDetailsDocRef: credentials.user.uid,
       approvalStatus: 'NOTAPPROVED'
       }); }),
         mapTo(credentials),
        catchError((error) => {
          return throwError(error.message);
        }
    ));

    // return of(credentials);
  }

  addCustomerProfile(ref: DocPredicate<CustomerData>, mydata: CustomerData, credentials: firebase.auth.UserCredential):
  Observable<firebase.auth.UserCredential> {

   const roleRefsc$ = this.db.colId$('userAccessRights', x => x.where('accessType', '==', 'customerAccess'));

   this.approval.firstCreated(credentials.user.uid, credentials.user.uid);
                               // item                userid

   return roleRefsc$.pipe(


         map( accessR => { this.db.doc(ref).set({ ...mydata ,
        accessColRef:  `userAccessRights/${accessR[0]}`,
        accessDocRef:  accessR[0],
         empRelationshipColRef: `/employeeProfile/${credentials.user.uid}`,
         empRelationshipDocRef: credentials.user.uid ,
         approvalDetailsColRef: `approvalDetails/${credentials.user.uid}`,
         approvalDetailsDocRef: credentials.user.uid,
         approvalStatus: 'NOTAPPROVED'
         }); }),
           mapTo(credentials),
          catchError((error) => {
            return throwError(error.message);
          }
      ));
  }




  addSupplierProfile(ref: DocPredicate<SupplierData>, mydata: SupplierData, credentials: firebase.auth.UserCredential):
  Observable<firebase.auth.UserCredential> {

   const roleRefsc$ = this.db.colId$('userAccessRights', x => x.where('accessType', '==', 'supplierAccess'));

   this.approval.firstCreated(credentials.user.uid, credentials.user.uid);
                               // item                userid

   return roleRefsc$.pipe(


         map( accessR => { this.db.doc(ref).set({ ...mydata ,
        accessColRef:  `userAccessRights/${accessR[0]}`,
        accessDocRef:  accessR[0],
         empRelationshipColRef: `employeeProfile/${credentials.user.uid}`,
         empRelationshipDocRef: credentials.user.uid ,
         approvalDetailsColRef: `approvalDetails/${credentials.user.uid}`,
         approvalDetailsDocRef: credentials.user.uid,
         approvalStatus: 'NOTAPPROVED'
         }); }),
           mapTo(credentials),
          catchError((error) => {
            return throwError(error.message);
          }
      ));
  }

  // Create commmon users data

  addCommonUserCustomer(ref: DocPredicate<AuthUser>, mydata: AuthUser, credentials: firebase.auth.UserCredential):
   Observable<firebase.auth.UserCredential> {

    return from(this.db.doc(ref).set({ ...mydata ,
    profileColRef:  `customerProfile/${credentials.user.uid}`,
    profileDocRef: credentials.user.uid,
      }),
    ) .pipe(
           mapTo(credentials),
          catchError((error) => {
            return throwError(error.message);
          }
      ));
  }

// Create commmon users supplier data

addCommonUserSupplier(ref: DocPredicate<AuthUser>, mydata: AuthUser, credentials: firebase.auth.UserCredential):
Observable<firebase.auth.UserCredential> {

 return from(this.db.doc(ref).set({ ...mydata ,
 profileColRef:  `supplierProfile/${credentials.user.uid}`,
 profileDocRef: credentials.user.uid,
   }),
 ) .pipe(
        mapTo(credentials),
       catchError((error) => {
         return throwError(error.message);
       }
   ));
}

   // Create commmon users data

   addCommonUserEmployee(ref: DocPredicate<AuthUser>, mydata: AuthUser, credentials: firebase.auth.UserCredential):
    Observable<firebase.auth.UserCredential> {

    return from(this.db.doc(ref).set({ ...mydata ,
    profileColRef:  `employeeProfile/${credentials.user.uid}`,
    profileDocRef: credentials.user.uid,
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
