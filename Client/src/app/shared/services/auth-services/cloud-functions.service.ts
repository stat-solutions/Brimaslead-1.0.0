import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
@Injectable({
  providedIn: 'root'
})
export class CloudFunctionsService {

  constructor(private createFunction: AngularFireFunctions) { }
}
