import { Pipe, PipeTransform } from '@angular/core';
import * as firebase from 'firebase';

@Pipe({
  name: 'fieldPathGen'
})
export class FieldPathGenPipe implements PipeTransform {

  transform(value: string): firebase.firestore.FieldPath {
    return new firebase.firestore.FieldPath(value);
  }

}
