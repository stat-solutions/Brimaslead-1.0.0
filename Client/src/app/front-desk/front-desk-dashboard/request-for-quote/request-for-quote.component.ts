import { Component, OnInit, TemplateRef } from '@angular/core';
import { LayoutService } from 'src/app/shared/services/layout.service';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { CustomValidatorInitialCompanySetup } from 'src/app/shared/validators/custom-validator-initial-company-setup';
import { ItemStock } from 'src/app/shared/models/other-models/item_stock.model';
import { ClientData } from '../../../shared/models/other-models/client_data.model';
import { CustomerRegisterComponent } from './../../../auth/customer-register/customer-register.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { AddRfqItemsComponent } from './add-rfq-items/add-rfq-items.component';
import { RfqDetailsComponent } from './rfq-details/rfq-details.component';
import { FilterPipe } from 'ngx-filter-pipe';
export interface ClientRfqData{  clientId: string;clientName: string;phoneNumber: string; email: string};

@Component({
  selector: 'app-request-for-quote',
  templateUrl: './request-for-quote.component.html',
  styleUrls: ['./request-for-quote.component.scss']
})
export class RequestForQuoteComponent implements OnInit {
  public modalRef: BsModalRef;
  userFilter: any = { clientName: '' };
  rfq: any = {};
  submit = false;
  userForm: FormGroup;
  itemsForm: FormGroup;
  rfq_number: number;
  index: number;
  clientLabel = 'Client';
  clientAdded = false;
  skipWalkinApproval = false;
  setApprovalStatus = false;

  users = [
    { user_name: 'Davis', department: 'Front desk' },
    { user_name: 'Maria', department: 'Sales' },
    { user_name: 'Sharon', department: 'Front desk' }
  ];

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

  clients: ClientRfqData[] = [
    {
      clientId: 'BC131212',
      clientName: 'KCB',
      phoneNumber: '0753134341',
      email: 'procurement@kcb-ug.com',
    
    },
    {
      clientId: 'BC121233',
      clientName: 'Sheraton Hotel',
      phoneNumber: '0772443208',
      email: 'procurement@sheratonhotel.com'
    },
    {
      clientId: 'BC031526',
      clientName: 'Shell',
      phoneNumber: '0751781341',
      email: 'supplies@shell.co.ug'
    },
    {
      clientId: 'BC107252',
      clientName: 'MTN',
      phoneNumber: '0782100042',
      email: 'procurement@mtn.co.ug'
    }
  ];
  meta: any;
  option: any;

  constructor(
    private layoutService: LayoutService,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private filterPipe: FilterPipe 
  ) {}

  ngOnInit() {
    this.userForm = this.createFormGroup();
    this.itemsForm = this.addItemsFormGroup();
  }

  createFormGroup() {
    return this.fb.group({
      rfq_number: [
        { value: this.setRfqId(), disabled: true },
        Validators.compose([Validators.required])
      ],
      clientName: ['', Validators.compose([Validators.required])],

      source_name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(4)])
      ]
      // source_status: ["", Validators.compose([Validators.required])]
    });
  }

  addItemsFormGroup() {
    return this.fb.group({
      rfq_number: [
        { value: '', disabled: true },
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],

      clientName: ['', Validators.compose([Validators.required])],

      addItem: this.fb.array([this.itemdets(), ]),
      stock_id: [
        '',
        // { value: '', disabled: false },

        Validators.compose([Validators.required, Validators.minLength(5)])
        // { updateOn: 'blur' }
      ],

      item_name: [
        '',
        Validators.compose([Validators.required]),
      ],

      unit: [
        { value: '', disabled: true },
        Validators.compose([Validators.required]),
      ],

      unit_cost: [
        { value: '', disabled: true },
        Validators.compose([Validators.required]),
      ],
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

      total_cost: [
        { value: '', disabled: true },
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

  itemdets() {
    return this.fb.group({
      stock_id: [
        '',
        // { value: '', disabled: false },

        Validators.compose([Validators.required, Validators.minLength(5)])
        // { updateOn: 'blur' }
      ],

      item_name: [
        '',
        Validators.compose([Validators.required]),
      ],

      unit: [
        { value: '', disabled: true },
        Validators.compose([Validators.required]),
      ],

      unit_cost: [
        { value: '', disabled: true },
        Validators.compose([Validators.required]),
      ],
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

      total_cost: [
        { value: '', disabled: true },
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

  // Receive user input and send to search method
  // onKey(value) {
  //   this.selecteditem = [];
  //   this.search(value);
  // }

  // search(value: string) {
  //   let filter = value.toLowerCase();
  //   for (let i = 0; i < this.meta.article.length; i++) {

  //     for (let j = 0; j < this.meta.article[i].article.length; j++) {
  //       let elt = this.meta.article[i].article[j];
  //       if (elt.name.toLowerCase().indexOf(filter) >= 0) {
  //         this.selecteditem.push(elt);
  //       }
  //     }
  //   }
  // }

  updateName(name: string) {
    this.fval.clientName.setValue(name);
    this.clientLabel = 'Selected Client';
    this.clientAdded = true;
  }

  getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  setRfqId() {
    return (this.rfq_number = this.getRandomNumberBetween(10000, 20000));
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'white modal-lg' }));

  }

  get items(): FormArray {
    return this.itemsForm.get('addItem') as FormArray;
  }

  //  getItems() {
  //    this.fcont.stock_id.setValue("article.stock_id.value");

  //   }

  get unitCost(): any {
    return +this.itemsForm.get('unit_cost');
  }
  get qtyRequired(): any {
    return +this.itemsForm.get('qty_required');
  }
  // totalCost() {
  //   return this.unitCost() * this.qtyRequired();
  // }
  updateIndex(iex: number) {

    console.log(iex);
  }
  updateOtherItems(selectedItem: any) {
    console.log(this.items.value[0]);
    ( this.itemsForm.controls.addItem as FormArray).setValue([
       this.items_stock.find(
          item => (item.item_name = selectedItem.target.value)
        ).stock_id,
      this.items_stock.find(
        item => (item.item_name = selectedItem.target.value)
      ).item_name,
      this.items_stock.find(
        item => (item.item_name = selectedItem.target.value)
      ).unit,
      this.items_stock.find(
        item => (item.item_name = selectedItem.target.value)
      ).qty_required,
      this.items_stock.find(
        item => (item.item_name = selectedItem.target.value)
  ).unit_cost,
              this.items_stock.find(
        item => (item.item_name = selectedItem.target.value)
      ).total_cost

    ]);
  }


  onCheckChange(event: any) {
    console.log(event.target.checked);
    if (event.target.checked) {

      this.skipWalkinApproval = true;

    } else {
      this.skipWalkinApproval = false;

    }
  }

  setSelectedChanges(event: any) {

    if (event.target.value === 'Select Rfq source') {

      this.fval.source_name.setErrors({ required: true });

    }

    if (event.target.value === 'Walk in') {

      this.setApprovalStatus = true;
    } else {
      this.setApprovalStatus = false;
    }

  }

  resetForm() {
    location.reload();
    this.userForm.reset();
  }


  get fval() {
    return this.userForm.controls;
  }
  get fcont() {
    return this.itemsForm.controls;
  }

  get clientName(): any {
    return this.userForm.get('clientName');
  }

  onSave() {}

  onSubmit() {
    this.submit = true;
    this.userForm.value;
  }

  add() {
    this.items.push(this.itemdets());
  }
  remove(indx: number) {
    this.items.removeAt(indx);
  }
}
