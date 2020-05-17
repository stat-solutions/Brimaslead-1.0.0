import { Injectable } from '@angular/core';
import { DbServiceService } from '../firestore-db/DbServiceService';
import { Observable, combineLatest, from, throwError } from 'rxjs';
import { AuthUser } from '../../models/user-profile/auth-user';
import { CustomerData } from '../../models/user-profile/client_data.model';
import { map, tap, mapTo, catchError } from 'rxjs/operators';
import { DocPredicate, CollectionPredicate } from '../firestore-db/CollectionPredicate';
import { RfqSumData } from 'src/app/front-desk/front-desk-dashboard/request-for-quote/request-for-quote.component';
export interface ListCustomers extends CustomerData {id:string;approvalStatus:string;};

export interface AuthUserId extends AuthUser { id: string; }
export interface CustomerDataId extends CustomerData { id: string; }

@Injectable({
  providedIn: 'root'
})
export class RfqRelatedServiceService {

  constructor(private db:DbServiceService) { }
  
    
  listOfCustomers(): Observable<ListCustomers[]> {
    
    return combineLatest(this.db.colWithIds$<CustomerDataId>('customerProfile'),this.db.colWithIds$<AuthUserId>('commonUser')).pipe(
      tap(xx=>(console.log(xx))),
      map(([customers,commonUsers])=>customers.map(
        
        cu=>(
      {...cu,id:commonUsers.find(c=>c.profileDocRef==cu.id).id,phoneNumber:commonUsers.find(c=>c.profileDocRef==cu.id).email}
      )as ListCustomers)))
      
      }
    
    
   // Create commmon users data
  
   createTheRfq(ref: CollectionPredicate<RfqSumData>, mydata:RfqSumData){
 
let newData={ ...mydata ,
  movementTimestamp:  this.db.serverTimeStamp,
  processingTimestamp: this.db.serverTimeStamp,
   createdAt: this.db.serverTimeStamp, 
   updatedAt: this.db.serverTimeStamp,
    };

 this.db.col(ref).add(newData).then(docRef=>docRef.collection('rfqsumAuditTrail').add(newData));

    
  }
  
}