import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ItemStock } from 'src/app/shared/models/other-models/item_stock.model';
import { BsModalService } from 'ngx-bootstrap';
import { CustomValidatorInitialCompanySetup } from 'src/app/shared/validators/custom-validator-initial-company-setup';
import { LayoutService } from 'src/app/shared/services/layout.service';

@Component({
  selector: 'app-add-rfq-items',
  templateUrl: './add-rfq-items.component.html',
  styleUrls: ['./add-rfq-items.component.scss']
})
export class AddRfqItemsComponent implements OnInit {
  @Input() client_names: string;

  itemsForm: FormGroup;
  userForm: FormGroup;
  rfq_number: number;
  index: number;
  items = [];
  users = [
    { user_name: 'Davis', department: 'Front desk' },
    { user_name: 'Maria', department: 'Sales' },
    { user_name: 'Sharon', department: 'Front desk' }
  ];
  // users = [
  //   { user_name: "Davis", department: "Front desk" },
  //   { user_name: "Maria", department: "Sales" },
  //   { user_name: "Sharon", department: "Front desk" }
  // ];

  rfq_sources = [
    { source_name: 'Walk in' },
    { source_name: 'Email' },
    { source_name: 'Sales and Marketing' },
    { source_name: 'Bids' }
  ];

  items_stock: ItemStock[] = [
    {
      stock_id: 'BMS235',
      item_name: 'pens',
      unit: 'boxes',
      qty_required: null,
      unit_cost: 30000
    },
    {
      stock_id: 'BMS346',
      item_name: 'umbrellas',
      unit: 'pieces',
      qty_required: null,
      unit_cost: 14000
    },
    {
      stock_id: 'BMS233',
      item_name: 'bags',
      unit: 'pieces',
      qty_required: null,
      unit_cost: 45000
    },
    {
      stock_id: 'BMS162',
      item_name: 'mugs',
      unit: 'pieces',
      qty_required: null,
      unit_cost: 20000
    },
    {
      stock_id: 'BMS135',
      item_name: 'diary',
      unit: 'pieces',
      qty_required: null,
      unit_cost: 25000
    },
    {
      stock_id: 'BMS127',
      item_name: 'tshirts',
      unit: 'pieces',
      qty_required: null,
      unit_cost: 25000
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
    return this.userForm.get('unit_cost');
  }
  get qtyRequired(): any {
    return this.userForm.get('qty_required');
  }
  add() {}
  remove(i: any) {

  }
  updateOtherItems(event: any) {}
  totalCost() {
    const unitCost = this.unitCost();
    const quantity = this.qtyRequired();
    return unitCost * quantity;
  }

  getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  setRfqId() {
    this.rfq_number = this.getRandomNumberBetween(10000, 20000);
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
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],

      item_name: ['', Validators.compose([Validators.required])],

      unit: ['', Validators.compose([Validators.required])],

      qty_required: [
        '',
        Validators.compose([
          Validators.required,
          CustomValidatorInitialCompanySetup.patternValidator(
            /^([0-9][0-9][0-9][0-9][0-9])$/,
            { hasNumber: true }
          )
        ])
      ],

      unit_cost: ['', Validators.compose([Validators.required])],
      total_cost: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          CustomValidatorInitialCompanySetup.patternValidator(
            /^([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])$/,
            { hasNumber: true }
          )
        ])
      ],
    });
  }

  get fval() {
    return this.userForm.controls;
  }
  
  onSave(){}
}
