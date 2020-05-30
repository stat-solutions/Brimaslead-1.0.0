export interface RfqData {
  rfq_id: number;
  stock_id: string;
  item_name: string;
  unit: string;
  unit_cost: number;
  qty_required: number;
  total_cost: number;
  // parameter: { color: string, child_menus: {}, phone_number: number};
  // timestamp: string;
  // created_by: { employee_id: number, user_name: string, department: string };
}
