export interface ClientData{
  clientId: string;
  clientName: string;
  phoneNumber: string;
  email: string;
  createdBy:string;
  firstApprovedBy:firebase.firestore.FieldPath;
  secondApprovedBy:firebase.firestore.FieldPath;
  createdAt:firebase.firestore.FieldValue;
  updateAt:firebase.firestore.FieldValue;
}
