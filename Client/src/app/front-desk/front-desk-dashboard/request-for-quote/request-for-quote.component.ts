import { Component, OnInit, TemplateRef } from '@angular/core';
import { LayoutService } from 'src/app/shared/services/layout.service';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { CustomValidatorInitialCompanySetup } from 'src/app/shared/validators/custom-validator-initial-company-setup';
import { ItemStock } from 'src/app/shared/models/item_stock.model';
import { ClientData } from './../../../shared/models/client_data.model';
import { CustomerRegisterComponent } from './../../../auth/customer-register/customer-register.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { AddRfqItemsComponent } from './add-rfq-items/add-rfq-items.component';
import { RfqDetailsComponent } from './rfq-details/rfq-details.component';

@Component({
  selector: "app-request-for-quote",
  templateUrl: "./request-for-quote.component.html",
  styleUrls: ["./request-for-quote.component.scss"]
})
export class RequestForQuoteComponent implements OnInit {
  public modalRef: BsModalRef;
  rfq: any = {};
  submit = false;
  userForm: FormGroup;
  itemsForm: FormGroup;
  rfqNumber: number;
  index: number;

  users = [
    { userName: "Davis", department: "Front desk" },
    { userName: "Maria", department: "Sales" },
    { userName: "Sharon", department: "Front desk" }
  ];

  rfqSources = [
    { sourceName: "Walk in" },
    { sourceName: "Email" },
    { sourceName: "Sales and Marketing" },
    { sourceName: "Bids" }
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

  clients: ClientData[] = [
    {
      clientId: "BC131212",
      clientName: "KCB",
      phoneNumber: 753134341,
      email: "procurement@kcb-ug.com"
    },
    {
      clientId: "BC121233",
      clientName: "Sheraton Hotel",
      phoneNumber: 772443208,
      email: "procurement@sheratonhotel.com"
    },
    {
      clientId: "BC031526",
      clientName: "Shell",
      phoneNumber: 751781341,
      email: "supplies@shell.co.ug"
    },
    {
      clientId: "BC107252",
      clientName: "MTN",
      phoneNumber: 782100042,
      email: "procurement@mtn.co.ug"
    }
  ];

  constructor(
    private layoutService: LayoutService,
    private modalService: BsModalService,
    private _formbuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.userForm = this.createFormGroup();
    this.itemsForm = this.addItemsFormGroup();
  }

  createFormGroup() {
    return this._formbuilder.group({
      rfqNumber: [
        { value: this.setRfqId(), disabled: true },
        Validators.compose([Validators.required])
      ],
      clientName: ["", Validators.compose([Validators.required])],

      sourceName: [
        "",
        Validators.compose([Validators.required, Validators.minLength(4)])
      ]
      // source_status: ["", Validators.compose([Validators.required])]
    });
  }

  addItemsFormGroup() {
    return this._formbuilder.group({
      rfqNumber: [
        { value: "", disabled: true },
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],

      clientName: ["", Validators.compose([Validators.required])],

      addItem: this._formbuilder.array([this.itemdets(),])
    });
  }

  itemdets() {
    return this._formbuilder.group({
      stockId: [
        "",
        // { value: '', disabled: false },

        Validators.compose([Validators.required, Validators.minLength(5)])
        // { updateOn: 'blur' }
      ],

      itemName: [
        "",
        Validators.compose([Validators.required]),
      ],

      unit: [
        { value: "", disabled: true },
        Validators.compose([Validators.required]),
      ],

      unitCost: [
        { value: "", disabled: true },
        Validators.compose([Validators.required]),
      ],
      qtyRequired: [
        "",
        Validators.compose([
          Validators.required,
          CustomValidatorInitialCompanySetup.patternValidator(
            /^([0-9][0-9][0-9][0-9][0-9])$/,
            { hasNumber: true }
          )
        ])
      ],

      totalCost: [
        { value: "", disabled: true },
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
  }

  getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  setRfqId() {
    return (this.rfqNumber = this.getRandomNumberBetween(10000, 20000));
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  get items(): FormArray {
    return this.itemsForm.get("addItem") as FormArray;
  }

  //  getItems() {
  //    this.fcont.stockId.setValue("article.stockId.value");

  //   }

  get unitCost(): any {
    return +this.itemsForm.get("unitCost");
  }
  get qtyRequired(): any {
    return +this.itemsForm.get("qtyRequired");
  }
  // totalCost() {
  //   return this.unitCost() * this.qtyRequired();
  // }
  updateIndex(iex:number){

    console.log(iex);
  }
  updateOtherItems(selectedItem: any) {
    console.log(this.items.value[0]);
      (<FormArray>this.itemsForm.controls["addItem"]).setValue([
       this.itemsStock.find(
          item => (item.itemName = selectedItem.target.value)
        ).stockId,
      this.itemsStock.find(
        item => (item.itemName = selectedItem.target.value)
      ).itemName,
      this.itemsStock.find(
        item => (item.itemName = selectedItem.target.value)
      ).unit,
      this.itemsStock.find(
        item => (item.itemName = selectedItem.target.value)
      ).qtyRequired,
      this.itemsStock.find(
        item => (item.itemName = selectedItem.target.value)
  ).unitCost
    ]);
  }

  get fval() {
    return this.userForm.controls;
  }
  get fcont() {
    return this.itemsForm.controls;
  }

  get clientName(): any {
    return this.userForm.get("clientName");
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
