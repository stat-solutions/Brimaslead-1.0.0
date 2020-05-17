
export interface AuthUser {
    email: string;
    password: string;
    profileColRef?:string;
    profileDocRef?:string;
   
    createdAt?:firebase.firestore.FieldValue;
    updatedAt?:firebase.firestore.FieldValue

}
