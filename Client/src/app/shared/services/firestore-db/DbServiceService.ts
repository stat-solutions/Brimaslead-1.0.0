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
  
  get serverTimeStamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }
}
