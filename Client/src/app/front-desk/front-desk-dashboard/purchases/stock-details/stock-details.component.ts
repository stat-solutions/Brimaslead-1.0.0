import { Component, OnInit } from '@angular/core';
import { ItemStock } from 'src/app/shared/models/item_stock.model';

@Component({
  selector: "app-stock-details",
  templateUrl: "./stock-details.component.html",
  styleUrls: ["./stock-details.component.sass"]
})
export class StockDetailsComponent implements OnInit {
  itemsStock: ItemStock[] = [
    {
      stockId: "BMS235",
      itemName: "pens",
      unit: "boxes",
      qtyRequired: null,
      unitCost: 30000
    },
    {
      stockId: "BMS346",
      itemName: "umbrellas",
      unit: "pieces",
      qtyRequired: null,
      unitCost: 14000
    },
    {
      stockId: "BMS233",
      itemName: "bags",
      unit: "pieces",
      qtyRequired: null,
      unitCost: 45000
    },
    {
      stockId: "BMS162",
      itemName: "mugs",
      unit: "pieces",
      qtyRequired: null,
      unitCost: 20000
    },
    {
      stockId: "BMS135",
      itemName: "diary",
      unit: "pieces",
      qtyRequired: null,
      unitCost: 25000
    },
    {
      stockId: "BMS127",
      itemName: "tshirts",
      unit: "pieces",
      qtyRequired: null,
      unitCost: 25000
    }
  ];

  constructor() {}

  ngOnInit() {}
}
