import { AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
// types
export type CollectionPredicate<T> = string | AngularFirestoreCollection<T>;
export type DocPredicate<T> = string | AngularFirestoreDocument<T>;
