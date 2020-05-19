import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CollectionPredicate, DocPredicate } from '../firestore-db/CollectionPredicate';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class DbServiceService {
  
  constructor(private afs: AngularFirestore) { }
  
  
  // return a reference
  col<T>(ref: CollectionPredicate<T>, queryFn?): AngularFirestoreCollection<T> {
    return typeof ref === 'string' ? this.afs.collection<T>(ref, queryFn) : ref;
  }
  doc<T>(ref: DocPredicate<T>): AngularFirestoreDocument<T> {
    return typeof ref === 'string' ? this.afs.doc<T>(ref) : ref;
  }
  // return an observable
  doc$<T>(ref: DocPredicate<T>): Observable<T> {
    return this.doc(ref).snapshotChanges().pipe(map(doc => {
      return doc.payload.data() as T;
    }));
  }
  col$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<T[]> {
    return this.col(ref, queryFn).snapshotChanges().pipe(map(docs => {
      return docs.map(a => a.payload.doc.data()) as T[];
    }));
  }
  docID$<T>(ref: DocPredicate<T>): Observable<string> {
    return this.doc(ref).snapshotChanges().pipe(map(doc => {
      return doc.payload.id;
    }));
  }
  colId$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<string[]> {
    return this.col(ref, queryFn).snapshotChanges().pipe(map(docs => {
      return docs.map(a => a.payload.doc.id);
    }));
  }
  colWithIds$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<T[]> {
    return this.col(ref, queryFn).snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
         const data= a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
  }
  
  get dbRef(){
    return this.afs.firestore;
  }
  
  get batch(){
    return this.afs.firestore.batch();
  }
  
  get serverTimeStamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }
  get increaseFieldByOne() {
   return firebase.firestore.FieldValue.increment(1);
  }
  increaseFieldByNumber(vl:number) {
    return firebase.firestore.FieldValue.increment(vl);
  }
  get decreaseFieldByOne() {
    return firebase.firestore.FieldValue.increment(-1);
  }
  decreaseFieldByNumber(vl:number) {
    return firebase.firestore.FieldValue.increment(-vl);
  }
}
// (method) firebase.firestore.Firestore.runTransaction<T>(updateFunction: (transaction: firebase.firestore.Transaction) => Promise<T>): Promise<T>
// Executes the given updateFunction and then attempts to commit the changes applied within the transaction. If any document read within the transaction has changed, Cloud Firestore retries the updateFunction. If it fails to commit after 5 attempts, the transaction fails.

// The maximum number of writes allowed in a single transaction is 500, but note that each usage of FieldValue.serverTimestamp(), FieldValue.arrayUnion(), FieldValue.arrayRemove(), or FieldValue.increment() inside a transaction counts as an additional write.

// @param updateFunction — The function to execute within the transaction context.

// @return
// If the transaction completed successfully or was explicitly aborted (the updateFunction returned a failed promise), the promise returned by the updateFunction is returned here. Else, if the transaction failed, a rejected promise with the corresponding failure error will be returned.