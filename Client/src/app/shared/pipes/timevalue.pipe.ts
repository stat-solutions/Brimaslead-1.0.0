import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timevalue'
})
export class TimevaluePipe implements PipeTransform {

  transform(date: Date): string {
    let  hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
  let thhours = hours % 12;
 let  hours1 = thhours ? hours : 12; // the hour '0' should be '12'
 let  theminutes = minutes < 10 ? '0'+minutes : minutes;
  let strTime = hours1 + ':' + theminutes + ' ' + ampm;
  return strTime;
  }

}
