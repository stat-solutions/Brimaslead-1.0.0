import { Injectable } from '@angular/core';
import { DbServiceService } from '../firestore-db/DbServiceService';
import { Observable, from } from 'rxjs';
import { tap, mapTo, concatMap, take, map } from 'rxjs/operators';
export interface BrimasleadSerialNumbers{serialName:string;serialNumber:firebase.firestore.FieldValue};
export interface BrimasleadSerialNumbersId extends BrimasleadSerialNumbers{id:string};
@Injectable({
  providedIn: 'root'
})
export class RfqSerialNumberService {
existingSerialNumber:firebase.firestore.FieldValue; docIdNo:string;
  constructor(private db:DbServiceService) { }
  
//    rfqSerialNumber():Observable<any>{
    
// const ref=this.afs.firestore.doc('brimasleadSerials/nbXrIsXsQO4Db82peVna');

//  return   from (  this.afs.firestore.runTransaction(async transaction=> {
//       const sfDoc = await transaction.get(ref);
//    if (!sfDoc.exists) {
//      throw "Document does not exist!";
//    }
//    let newValue = (sfDoc.data().serialNumber + 1);
//    transaction.update(ref, { serialNumber: newValue });
//    return newValue;
//   }).then(data=>{
//      return data;
//   }).catch(function(err) {
   
//       console.error(err);
//   }));

//     }
 
//  :Observable<number>
rfqSerialNumber():Observable<firebase.firestore.FieldValue>{
  
  const updateDbFirst = (
    fireUser: firebase.firestore.FieldValue,
  ): Observable<firebase.firestore.FieldValue> => {
    return from(
      this.db.doc('brimasleadSerials/nbXrIsXsQO4Db82peVna').update({serialNumber:this.db.increaseFieldByOne})
    ).pipe(take(1),mapTo(fireUser));
  };
  
  const getTheUpdatedNumber = (): Observable<firebase.firestore.FieldValue> => {
    return this.db.doc$<BrimasleadSerialNumbers>('brimasleadSerials/nbXrIsXsQO4Db82peVna').pipe(
      take(1),
    map(xx=>xx.serialNumber)
    )};
  
 return this.db.doc$<BrimasleadSerialNumbers>('brimasleadSerials/nbXrIsXsQO4Db82peVna').pipe(
  take(1),
    tap(x=>{this.existingSerialNumber=x.serialNumber}),
    concatMap(() => updateDbFirst(this.existingSerialNumber)),
    concatMap(() =>getTheUpdatedNumber())
  )
  
  
  
}
 
 
 
 
 
 
  
}
