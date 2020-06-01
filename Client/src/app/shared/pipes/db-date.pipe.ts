import { Pipe, PipeTransform } from '@angular/core';
import * as firebase from 'firebase';
@Pipe({
  name: 'dbDate'
})
export class DbDatePipe implements PipeTransform {

  transform(value: firebase.firestore.Timestamp ): Date {
    return  value.toDate();
  }

}
