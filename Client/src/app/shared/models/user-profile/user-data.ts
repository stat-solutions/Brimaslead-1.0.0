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
    photo: File;
    userName: string;
    accessRef:firebase.firestore.FieldPath;
    departmentRef:firebase.firestore.FieldPath;
    createdAt:firebase.firestore.FieldValue;
    updatedAt:firebase.firestore.FieldValue




}
