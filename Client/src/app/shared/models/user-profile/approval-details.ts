export interface ApprovalDetails {
approvalDetailsId: string;
createdBy: string;
firstApprovedBy: string;
secondApprovedBy: string;
thirdApprovedBy: string;
fourthApprovedBy: string;
fifthApprovedBy: string;

createdByAt: firebase.firestore.FieldValue;
firstApprovedByAt: firebase.firestore.FieldValue;
secondApprovedByAt: firebase.firestore.FieldValue;
thirdApprovedByAt: firebase.firestore.FieldValue;
fourthApprovedByAt: firebase.firestore.FieldValue;
fifthApprovedByAt: firebase.firestore.FieldValue;


updatedBy: string;
firstUpdateApprovedBy: string;
secondUpdateApprovedBy: string;
thirdUpdateApprovedBy: string;
fourthUpdateApprovedBy: string;
fifthUpdateApprovedBy: string;

updatedByAt: firebase.firestore.FieldValue;
firstUpdateApprovedByAt: firebase.firestore.FieldValue;
secondUpdateApprovedByAt: firebase.firestore.FieldValue;
thirdUpdateApprovedByAt: firebase.firestore.FieldValue;
fourthUpdateApprovedByAt: firebase.firestore.FieldValue;
fifthUpdateApprovedByAt: firebase.firestore.FieldValue;

}
