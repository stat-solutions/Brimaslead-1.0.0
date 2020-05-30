import { Injectable } from '@angular/core';
import { DbServiceService } from '../firestore-db/DbServiceService';
import { Observable, combineLatest, from } from 'rxjs';
import { AuthUser } from '../../models/user-profile/auth-user';
import { CustomerData } from '../../models/user-profile/client_data.model';
import { map, tap, mapTo } from 'rxjs/operators';
import { CollectionPredicate } from '../firestore-db/CollectionPredicate';
import { RfqSumData } from 'src/app/front-desk/front-desk-dashboard/request-for-quote/request-for-quote.component';
import { RfqSerialNumberService } from './rfq-serial-number.service';
import { TradingProductCatalog } from 'src/app/front-desk/front-desk-dashboard/create-catalog-item/create-catalog-item.component';
export interface ListCustomers extends CustomerData {id: string; approvalStatus: string; }

export interface AuthUserId extends AuthUser { id: string; }
export interface CustomerDataId extends CustomerData { id: string; }

@Injectable({
  providedIn: 'root'
})
export class RfqRelatedServiceService {

  constructor(private db: DbServiceService, private serial: RfqSerialNumberService) { }


  listOfCustomers(): Observable<ListCustomers[]> {

    return combineLatest(this.db.colWithIds$<CustomerDataId>('customerProfile'), this.db.colWithIds$<AuthUserId>('commonUser')).pipe(
      tap(xx => (console.log(xx))),
      map(([customers, commonUsers]) => customers.map(

        cu => (
      {...cu, id: commonUsers.find(c => c.profileDocRef === cu.id).id, phoneNumber: commonUsers.find(c => c.profileDocRef === cu.id).email}
      )as ListCustomers)));

      }


   // Create commmon users data

   createTheRfq(ref: CollectionPredicate<RfqSumData>, mydata: RfqSumData) {

    this.serial.rfqSerialNumber().subscribe(theSerial => {

const newData = { ...mydata ,
  rfqSerialNumber: `BRFQ${theSerial}`,
  movementTimestamp:  this.db.serverTimeStamp,
  processingTimestamp: this.db.serverTimeStamp,
   createdAt: this.db.serverTimeStamp,
   updatedAt: this.db.serverTimeStamp,
   rfqStatus: 'Creation'
    };

this.db.col(ref).add(newData).then(docRef => docRef.collection('rfqsumAuditTrail').add(newData));
});

  }



  createTheProduct(ref: CollectionPredicate<TradingProductCatalog>, mydata: TradingProductCatalog): Observable<string> {
return from(this.db.col(ref).add(mydata).then(
  docRef => {
    
    console.log(`mydata=${mydata.tradingProductVariants[0].variantAttributes[0].display}`);

    console.log(`mydata=${mydata.tradingProductVariants[0].variantAttributes.length}`);

    console.log(`mydata=${mydata.tradingProductVariants.length}`);

    docRef.collection('rfqsumAuditTrail').add(mydata);

    }
  )).pipe(
  mapTo('User created successfully')
  );
  }

  getAllProductDetails(): Observable<TradingProductCatalog[]> {
return this.db.colWithIds$<TradingProductCatalog>('tradingProductData');
  }

}

