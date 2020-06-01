import { Component, OnInit } from '@angular/core';
import { RfqData } from 'src/app/shared/models/other-models/rfqRelatedModels/rfq-data.model';

@Component({
  selector: "app-rfq-details",
  templateUrl: "./rfq-details.component.html",
  styleUrls: ["./rfq-details.component.sass"]
})
export class RfqDetailsComponent implements OnInit {
  rfqs: RfqData[] = [
    {
      rfqId: "RFQ023100",
      stockId: "BMS104",
      itemName: "School Bags",
      unit: "Pieces",
      unitCost: 10000,
      qtyRequired: 23,
      totalCost: 230000,
      // parameter:{color:'Red',child_menus:{}}
      isEditable: false
    },
    {
      rfqId: "RFQ100293",
      stockId: "BMS012",
      itemName: "Branded Laptops",
      unit: "Pieces",
      unitCost: 1000000,
      qtyRequired: 23,
      totalCost: 23000000,
      isEditable: false
    },
    {
      rfqId: "RFQ000023",
      stockId: "BMS128",
      itemName: "Bannerz",
      unit: "Pieces",
      unitCost: 340000,
      qtyRequired: 100,
      totalCost: 34000000,
      isEditable: false
    },
    {
      rfqId: "RFQ000221",
      stockId: "BMS144",
      itemName: "Branded Pends",
      unit: "Boxes",
      unitCost: 30000,
      qtyRequired: 50,
      totalCost: 1500000,
      isEditable: false
    }
  ];

  constructor() {}

  ngOnInit() {}
}
