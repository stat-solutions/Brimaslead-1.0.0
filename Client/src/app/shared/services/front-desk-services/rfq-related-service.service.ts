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
import { TradingProductVariants,
         TradingProductCatalogWithVId } from '../../../front-desk/front-desk-dashboard/create-catalog-item/create-catalog-item.component';
export interface ListCustomers extends CustomerData {id: string; approvalStatus: string; }

export interface AuthUserId extends AuthUser { id: string; }
export interface CustomerDataId extends CustomerData { id: string; }

@Injectable({
  providedIn: 'root'
})
export class RfqRelatedServiceService {
  newData: TradingProductCatalog;
  newDataV: TradingProductCatalogWithVId;
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



  createTheProductStandard(ref: CollectionPredicate<TradingProductCatalog>, mydata: TradingProductCatalog): Observable<string> {

   return this.serial.tradingProductSerialNumber().pipe(


      map(theSerial => {


       this.newData = { ...mydata ,
        tradingProductId: `P${theSerial}`,
        tradingProductInventoryStatus: 'NOT AVAILABLE',
         createdAt: this.db.serverTimeStamp,
         updatedAt: this.db.serverTimeStamp,
          };

       this.db.col(ref).add(this.newData);
      }),
      mapTo('User created successfully')
      );

  }



  createTheProductVariants(ref: CollectionPredicate<TradingProductCatalog>, mydata: TradingProductCatalogWithVId): Observable<string> {

   return this.serial.variantSerialNumber().pipe(


    map(vSerialNo => {

      mydata.tradingProductVariants.forEach(
        variant => {
console.log(vSerialNo);
console.log(variant);
this.newDataV = { ...mydata ,
            variantId: `VAR${vSerialNo}`,
            tradingProductName: `${mydata.tradingProductName}/${variant.variantAttributesValues}`,
            tradingProductInventoryStatus: 'NOT AVAILABLE',
             createdAt: this.db.serverTimeStamp,
             updatedAt: this.db.serverTimeStamp,
              };
console.log( this.newDataV);
this.postVariant(ref, this.newDataV);

          }


           );

    }),
    mapTo('User created successfully')
    );

   }

  getAllProductDetails(): Observable<TradingProductCatalog[]> {
return this.db.colWithIds$<TradingProductCatalog>('tradingProductData');
  }



postVariant(ref: CollectionPredicate<TradingProductCatalog>, mydata: TradingProductCatalogWithVId) {

console.log(mydata);
  return this.serial.tradingProductSerialNumber().pipe(


    map(theSerial => {


     this.newDataV = { ...mydata ,
      tradingProductId: `P${theSerial}`
        };

     this.db.col(ref).add(this.newDataV);
    })
    );


}



}

