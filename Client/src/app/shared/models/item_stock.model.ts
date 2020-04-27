export interface ItemStock {
  [x: string]: any;
  stock_id: string;
  item_name: string;
  unit: string;
  qty_required: number;
  unit_cost: number;
}
