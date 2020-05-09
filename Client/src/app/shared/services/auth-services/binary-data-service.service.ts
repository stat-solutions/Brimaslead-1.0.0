import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { map, catchError, mapTo, finalize, tap, mergeMap, delay } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class BinaryDataServiceService {
  downloadURL: Observable<any>;
  fb: any;
  constructor(private afsto: AngularFireStorage) {
      }
  
  

  uploadImage(file: any, credential: firebase.auth.UserCredential) : Observable<firebase.auth.UserCredential>{

  console.log(file);
  
  const filePath = `blimasleadUser/${credential.user.uid}`;
  console.log(filePath);
  const fileRef = this.afsto.ref(filePath);
  
 return this.afsto.upload(filePath, file)
    .snapshotChanges()
    .pipe(
          
      tap(xx=>console.log(`am in ${xx}`)),
      finalize(() => {
      
      fileRef.getDownloadURL().pipe(
        
        tap(xx=>console.log(`am in ${xx}`)),
        
        map(x=>{credential.user.updateProfile({photoURL: x})}),
        
  
      
    );
    
  
    })
      ,
      delay(4000), 
       mapTo(credential),
  catchError((error) => {

    return throwError(error.message);
  })
  
      );
  
   }

  }
               
  
  
 