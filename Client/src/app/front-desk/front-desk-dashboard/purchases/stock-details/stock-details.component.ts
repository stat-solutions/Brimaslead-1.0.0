import { Component, OnInit } from '@angular/core';
import { ItemStock } from 'src/app/shared/other-models/item_stock.model';

@Component({
  selector: "app-stock-details",
  templateUrl: "./stock-details.component.html",
  styleUrls: ["./stock-details.component.sass"]
})
export class StockDetailsComponent implements OnInit {
  items_stock: ItemStock[] = [
    {
      stock_id: "BMS235",
      item_name: "pens",
      unit: "boxes",
      qty_required: null,
      unit_cost: 30000
    },
    {
      stock_id: "BMS346",
      item_name: "umbrellas",
      unit: "pieces",
      qty_required: null,
      unit_cost: 14000
    },
    {
      stock_id: "BMS233",
      item_name: "bags",
      unit: "pieces",
      qty_required: null,
      unit_cost: 45000
    },
    {
      stock_id: "BMS162",
      item_name: "mugs",
      unit: "pieces",
      qty_required: null,
      unit_cost: 20000
    },
    {
      stock_id: "BMS135",
      item_name: "diary",
      unit: "pieces",
      qty_required: null,
      unit_cost: 25000
    },
    {
      stock_id: "BMS127",
      item_name: "tshirts",
      unit: "pieces",
      qty_required: null,
      unit_cost: 25000
    }
  ];

  constructor() {}

  ngOnInit() {}
}
