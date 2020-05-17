import { Pipe, PipeTransform } from '@angular/core';
import { DbServiceService } from '../services/firestore-db/DbServiceService';
import { Observable } from 'rxjs';

@Pipe({
  name: 'doc'
})
export class DocPipe implements PipeTransform {
  
  constructor(private db:DbServiceService){}

  transform(value: any): Observable<any> {
    return this.db.doc$(value);
  }

}
