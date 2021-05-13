import {
    Injectable
}
from '@angular/core';
import {
    ToastrService
}
from 'ngx-toastr';
@Injectable({ providedIn: 'root' }) export class ToastrMessagesService {

    constructor(private toastr: ToastrService) {}

    registerSuccess(errorMsg:any) {

        this.toastr.success('Please first verify your email and then proceed to login', errorMsg, {timeOut: 6000, positionClass: 'toast-top-right'});
    }
    registerError(errorMsg:any) {

        this.toastr.error(errorMsg, 'Registration Failed!!', {timeOut: 6000, positionClass: 'toast-bottom-left'});
    }




  

    signIn(roleId:number) {

        switch(roleId) {
          
          case 99: 
             this.toastr.warning("Success", 'Your account is not assigned a role, please contact system admin', {timeOut: 6000, positionClass: 'toast-bottom-left'});

            break;

            case 100: this.toastr.success('','Signed in sucessfully to SYSTEM ADMIN  MODULE',{timeOut: 6000, positionClass: 'toast-top-right'});

            break;
            
              case 200: this.toastr.success('','Signed in sucessfully to FRONT DESK  MODULE',{timeOut: 6000, positionClass: 'toast-top-right'});

            break;
            
              case 300: this.toastr.success('','Signed in sucessfully to ADMIN  MODULE',{timeOut: 6000, positionClass: 'toast-top-right'});

            break;
            
            case 400: this.toastr.success('','Signed in sucessfully to FINANCE  MODULE',{timeOut: 6000, positionClass: 'toast-top-right'});

            break;
            
              case 500: this.toastr.success('','Signed in sucessfully to CREATIVE AND  DESIGN  MODULE',{timeOut: 6000, positionClass: 'toast-top-right'});

            break;
            
            case 600: this.toastr.success('','Signed in sucessfully to QUALITY AND ASSURANCE  MODULE',{timeOut: 6000, positionClass: 'toast-top-right'});

            break;
            
            case 700: this.toastr.success('','Signed in sucessfully to PRODUCTION  MODULE',{timeOut: 6000, positionClass: 'toast-top-right'});

            break;
            
            case 800: this.toastr.success('','Signed in sucessfully to SALES AND MARKETING MODULE',{timeOut: 6000, positionClass: 'toast-top-right'});

            break;
            
            case 900: this.toastr.success('','Signed in sucessfully to TRANSPORT AND LOGISTICS  MODULE',{timeOut: 6000, positionClass: 'toast-top-right'});

            break;
            
            case 1000: this.toastr.success('','Signed in sucessfully to MANAGEMENT  MODULE',{timeOut: 6000, positionClass: 'toast-top-right'});

            break;

        }


    }


 logInError(id:number,errorMsg:any) {

switch(id){
  case 1:
        this.toastr.error('ACCOUNT NOT APPROVED!! Please  contact SYSTEM ADMIN','LOGIN FAILED!!',  {timeOut: 8000, positionClass: 'toast-bottom-left'});
        break;
        case 3:
        this.toastr.error( 'ACCOUNT DEACTIVATED!! Please  contact SYSTEM ADMIN','LOGIN FAILED!!', {timeOut: 8000, positionClass: 'toast-bottom-left'});
        break;
        
        case 5:
          this.toastr.error( 'Email NOT Verified!! Please log into your email account and click on the link for verification or otherwise contact SYSTEM ADMIN','LOGIN FAILED!!', {timeOut: 8000, positionClass: 'toast-bottom-left'});
        break;
        
         case 6:
           this.toastr.error( errorMsg,'LOGIN FAILED!!', {timeOut: 8000, positionClass: 'toast-bottom-left'});
        break;
             
        }
 }
 
 

}
