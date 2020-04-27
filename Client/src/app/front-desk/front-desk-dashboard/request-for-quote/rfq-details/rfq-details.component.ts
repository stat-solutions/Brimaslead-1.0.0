import { Component, OnInit } from '@angular/core';
import { RfqData } from 'src/app/shared/models/rfq-data.model';

@Component({
  selector: "app-rfq-details",
  templateUrl: "./rfq-details.component.html",
  styleUrls: ["./rfq-details.component.sass"]
})
export class RfqDetailsComponent implements OnInit {
  rfqs: RfqData[] = [
    {
      rfq_id: 1,
      stock_id: 'BMS104',
      item_name: "School Bags",
      unit: "Pieces",
      unit_cost: 10000,
      qty_required: 23,
      total_cost: 230000
    },
    {
      rfq_id: 1,
      stock_id: 'BMS012',
      item_name: "Branded Laptops",
      unit: "Pieces",
      unit_cost: 1000000,
      qty_required: 23,
      total_cost: 23000000
    },
    {
      rfq_id: 1,
      stock_id: 'BMS128',
      item_name: "Bannerz",
      unit: "Pieces",
      unit_cost: 340000,
      qty_required: 100,
      total_cost: 34000000
    },
    {
      rfq_id: 1,
      stock_id: 'BMS144',
        item_name: "Branded Pends",
      unit: "Boxes",
      unit_cost: 30000,
      qty_required: 50,
      total_cost: 1500000
    }
  ];

  constructor() {}

  ngOnInit() {}
}
