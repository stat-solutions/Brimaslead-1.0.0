import { Injectable } from '@angular/core';
import { DbServiceService } from '../firestore-db/DbServiceService';

@Injectable({
  providedIn: 'root'
})
export class ApprovalDetailsService {

  constructor(private db: DbServiceService) { }


   firstCreated(itemsId: string, userId: string) {


    this.db.doc(`approvalDetails/${itemsId}`).set({
      createdBy: userId,
      firstApprovedBy: 'NOT REQUIRED',
      secondApprovedBy: 'NOT REQUIRED',
      thirdApprovedBy: 'NOT REQUIRED',
      fourthApprovedBy: 'NOT REQUIRED',
      fifthApprovedBy: 'NOT REQUIRED',

      createdByAt: this.db.serverTimeStamp,
      firstApprovedByAt: this.db.serverTimeStamp,
      secondApprovedByAt: this.db.serverTimeStamp,
      thirdApprovedByAt: this.db.serverTimeStamp,
      fourthApprovedByAt: this.db.serverTimeStamp,
      fifthApprovedByAt: this.db.serverTimeStamp,

      updatedBy: 'NOT REQUIRED',
      firstUpdateApprovedBy: 'NOT REQUIRED',
      secondUpdateApprovedBy: 'NOT REQUIRED',
      thirdUpdateApprovedBy: 'NOT REQUIRED',
      fourthUpdateApprovedBy: 'NOT REQUIRED',
      fifthUpdateApprovedBy: 'NOT REQUIRED',

      updatedByAt: this.db.serverTimeStamp,
      firstUpdateApprovedByAt: this.db.serverTimeStamp,
      secondUpdateApprovedByAt: this.db.serverTimeStamp,
      thirdUpdateApprovedByAt: this.db.serverTimeStamp,
      fourthUpdateApprovedByAt: this.db.serverTimeStamp,
      fifthUpdateApprovedByAt: this.db.serverTimeStamp,
     });

   }


    firstApproved(itemsId: string, userId: string) {

      this.db.doc(`approvalDetails/${itemsId}`).update({

       firstApprovedBy: userId,

       firstApprovedByAt: this.db.serverTimeStamp,

      });


      }


      secondApproved(itemsId: string, userId: string) {

        this.db.doc(`approvalDetails/${itemsId}`).update({

          secondApprovedBy: userId,

          secondApprovedByAt: this.db.serverTimeStamp,

        }); }

        thirdApproved(itemsId: string, userId: string) {

          this.db.doc(`approvalDetails/${itemsId}`).update({

            thirdApprovedBy: userId,

            thirdApprovedByAt: this.db.serverTimeStamp,

          }); }

          fourthApproved(itemsId: string, userId: string) {

            this.db.doc(`approvalDetails/${itemsId}`).update({

              fourthApprovedBy: userId,

              fourthApprovedByAt: this.db.serverTimeStamp,

            }); }


           fifthApproved(itemsId: string, userId: string) {

              this.db.doc(`approvalDetails/${itemsId}`).update({

                fifthApprovedBy: userId,

                fifthApprovedByAt: this.db.serverTimeStamp,

              }); }




             updatedBy(itemsId: string, userId: string) {

                this.db.doc(`approvalDetails/${itemsId}`).update({

                  updatedBy: userId,

                  updatedByAt: this.db.serverTimeStamp,

                });


                }





              firstUpdateApproved(itemsId: string, userId: string) {

                this.db.doc(`approvalDetails/${itemsId}`).update({

                  firstUpdateApprovedBy: userId,

                  firstUpdateApprovedByAt: this.db.serverTimeStamp,

                });


                }



                secondUpdateApproved(itemsId: string, userId: string) {

                  this.db.doc(`approvalDetails/${itemsId}`).update({

                    secondUpdateApprovedBy: userId,

                    secondUpdateApprovedByAt: this.db.serverTimeStamp,

                  }); }




                  thirdUpdateApproved(itemsId: string, userId: string) {

                    this.db.doc(`approvalDetails/${itemsId}`).update({

                      thirdUpdateApprovedBy: userId,

                      thirdUpdateApprovedByAt: this.db.serverTimeStamp,

                    }); }


                    fourthUpdateApproved(itemsId: string, userId: string) {

                      this.db.doc(`approvalDetails/${itemsId}`).update({

                        fourthUpdateApprovedBy: userId,

                        fourthUpdateApprovedByAt: this.db.serverTimeStamp,

                      }); }

                     fifthUpdateApproved(itemsId: string, userId: string) {

                        this.db.doc(`approvalDetails/${itemsId}`).update({

                          fifthUpdateApprovedBy: userId,

                          fifthUpdateApprovedByAt: this.db.serverTimeStamp,

                        }); }
























}
