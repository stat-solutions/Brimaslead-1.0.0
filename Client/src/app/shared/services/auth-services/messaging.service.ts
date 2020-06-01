import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  constructor(private sendMessage: AngularFireMessaging) { }
}
