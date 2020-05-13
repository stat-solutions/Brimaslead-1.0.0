export interface RfqData {
  rfqId: string;
  stockId: string;
  itemName: string;
  unit: string;
  qtyRequired: number;
  unitCost: number;
  totalCost: any;
  isEditable: boolean;
  // client: { id: number, email: string, phone_number: number};
  // timestamp: string;
  // created_by: { employee_id: number, user_name: string, department: string };
}
