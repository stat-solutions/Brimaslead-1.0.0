import { Timestamp } from 'rxjs/internal/operators/timestamp';

export interface UserData {

    address: string;
    commenceDate: Date;
    confirmPassword: string;
    dateOfBirth: Date;
    department: string;
    email: string;
    employeeId: string;
    gender: string;
    jobTitle: string;
    nationalId: string;
    password: string;
    phoneNumber: string;
    photo: string;
    userName: string;
    accessColRef:string;
    accessDocRef:string;
    departmentColRef:string;
    departmentDocRef:string;
    createdAt:firebase.firestore.FieldValue;
    updatedAt:firebase.firestore.FieldValue
    approvalStatus?:string;//APPROVED,NOTAPPROVED



}
