import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ItemStock } from 'src/app/shared/models/other-models/rfqRelatedModels/item_stock.model';
import { BsModalService } from 'ngx-bootstrap';
import { CustomValidatorInitialCompanySetup } from 'src/app/shared/validators/custom-validator-initial-company-setup';
import { LayoutService } from 'src/app/shared/services/other-services/layout.service';

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
      stockId: 'BMS235',
      itemName: 'pens',
      unit: 'boxes',
      quantityRequired: null,
      unitCost: 30000
    },
    {
      stockId: 'BMS346',
      itemName: 'umbrellas',
      unit: 'pieces',
      quantityRequired: null,
      unitCost: 14000
    },
    {
      stockId: 'BMS233',
      itemName: 'bags',
      unit: 'pieces',
      quantityRequired: null,
      unitCost: 45000
    },
    {
      stockId: 'BMS162',
      itemName: 'mugs',
      unit: 'pieces',
      quantityRequired: null,
      unitCost: 20000
    },
    {
      stockId: 'BMS135',
      itemName: 'diary',
      unit: 'pieces',
      quantityRequired: null,
      unitCost: 25000
    },
    {
      stockId: 'BMS127',
      itemName: 'tshirts',
      unit: 'pieces',
      quantityRequired: null,
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

  get theunitCost(): any {
    return this.userForm.get('unitCost');
  }
  get qtyRequired(): any {
    return this.userForm.get('quantityRequired');
  }
  add() {}
  remove() {

  }
  updateOtherItems() {}
  totalCost() {
    const unitCost = this.theunitCost();
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
      stockId: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],

      itemName: ['', Validators.compose([Validators.required])],

      unit: ['', Validators.compose([Validators.required])],

      quantityRequired: [
        '',
        Validators.compose([
          Validators.required,
          CustomValidatorInitialCompanySetup.patternValidator(
            /^([0-9][0-9][0-9][0-9][0-9])$/,
            { hasNumber: true }
          )
        ])
      ],

      unitCost: ['', Validators.compose([Validators.required])],
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
