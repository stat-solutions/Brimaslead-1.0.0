import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ItemStock } from 'src/app/shared/models/item_stock.model';
import { BsModalService } from 'ngx-bootstrap';
import { CustomValidatorInitialCompanySetup } from 'src/app/shared/validators/custom-validator-initial-company-setup';
import { LayoutService } from 'src/app/shared/services/layout.service';

@Component({
  selector: "app-add-rfq-items",
  templateUrl: "./add-rfq-items.component.html",
  styleUrls: ["./add-rfq-items.component.scss"]
})
export class AddRfqItemsComponent implements OnInit {
  @Input() clientNames: string;

  userForm: FormGroup;
  rfqNumber: number;
  index: number;
  items = [];
  users = [
    { userName: "Davis", department: "Front desk" },
    { userName: "Maria", department: "Sales" },
    { userName: "Sharon", department: "Front desk" }
  ];
  // users = [
  //   { userName: "Davis", department: "Front desk" },
  //   { userName: "Maria", department: "Sales" },
  //   { userName: "Sharon", department: "Front desk" }
  // ];

  rfq_sources = [
    { source_name: "Walk in" },
    { source_name: "Email" },
    { source_name: "Sales and Marketing" },
    { source_name: "Bids" }
  ];

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

  constructor(
    private layoutService: LayoutService,
    private modalService: BsModalService,
    private _formbuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.userForm = this.createFormGroup();
  }
  updateName(name: string) {
    this.fval.client_name.setValue(name);
  }

  get unitCost(): any {
    return this.userForm.get("unit_cost");
  }
  get qtyRequired(): any {
    return this.userForm.get("qty_required");
  }

  totalCost() {
    let unitCost = this.unitCost();
    let quantity = this.qtyRequired();
    return unitCost * quantity;
  }

  getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  setRfqId() {
    this.rfqNumber = this.getRandomNumberBetween(10000, 20000);
  }

  // pickData() {
  //   console.log(this.setRfqId());
  // }

  // public openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }

  createFormGroup() {
    return this._formbuilder.group({
      stock_id: [
        "",
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],

      item_name: ["", Validators.compose([Validators.required])],

      unit: ["", Validators.compose([Validators.required])],

      qty_required: [
        "",
        Validators.compose([
          Validators.required,
          CustomValidatorInitialCompanySetup.patternValidator(
            /^([0-9][0-9][0-9][0-9][0-9])$/,
            { hasNumber: true }
          )
        ])
      ],

      unit_cost: ["", Validators.compose([Validators.required])],
      total_cost: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          CustomValidatorInitialCompanySetup.patternValidator(
            /^([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])$/,
            { hasNumber: true }
          )
        ])
      ]
    });
  }

  get fval() {
    return this.userForm.controls;
  }
}
