export interface CustomerData {
  clientId: string;
  clientName: string;
  phoneNumber: string;
  email: string;
  accessColRef?: string; // Access rights table which helps us at login mainly
  accessDocRef?: string; // Access rights table which helps us at login mainly
  empRelationshipColRef: string; // Employee relationship for whom the client is tagged to
  empRelationshipDocRef: string; // Employee relationship for whom the client is tagged to
  approvalDetailsColRef?: string;
  approvalDetailsDocRef?: string;
  approvalStatus?: string; // APPROVED,NOTAPPROVED
}
