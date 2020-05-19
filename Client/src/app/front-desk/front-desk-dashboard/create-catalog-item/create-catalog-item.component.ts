import { Component, OnInit } from '@angular/core';
export interface ItemCatalog {itemId:string;/*Generated*/ unitOfMeasure:string;/*Cases,Packs,Pieces,Each,Weight=,Height,Width,Length,Volume*/ itemName:string;itemCategory:string/*Managed*/;itemBrand:string;itemsType:string; /*stocked=Stocked items are physical objects whose quantity should be tracked,serialised=Serialized products are objects that have a unique serial number on each unit.,non-stoked=Non-stocked products are not tracked by quantity, but you can assign costs and prices to them,service=Services are not tracked by quantity, but you can assign costs and prices to them.*/stockedItemType:string;/*Standard=This item has one variant which is itself,Variant=These item has different attributes, like size or color. Each variant can be uniquely tracked,Composite=A composite contains one or more standard products. It can be tracked as one item for all the standard items liked to it*/description:string;/**/averageCostPrice:number;averageSellingPrice:number,inventoryColRef:string;inventoryDocRef:string;inventoryStatus:string;/*Available,Not Avala*/supplierColRef:string;supplierDocRef:string;};

@Component({
  selector: 'app-create-catalog-item',
  templateUrl: './create-catalog-item.component.html',
  styleUrls: ['./create-catalog-item.component.sass']
})
export class CreateCatalogItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
