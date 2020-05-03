import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { LayoutService } from "src/app/shared/services/layout.service";
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormArray,
  FormControl
} from "@angular/forms";
import { CustomValidatorInitialCompanySetup } from "src/app/shared/validators/custom-validator-initial-company-setup";
import { ItemStock } from "src/app/shared/models/item_stock.model";
import { ClientData } from "../../../shared/models/client_data.model";
import { CustomerRegisterComponent } from "../../../auth/customer-register/customer-register.component";
import { BsModalService, BsModalRef } from "ngx-bootstrap";
import { TabsetComponent } from "ngx-bootstrap/tabs";
import { RfqData } from "src/app/shared/models/rfq-data.model";
import { RfqTable } from "src/app/shared/models/rfq_table.model";
import { RfqStatus } from 'src/app/shared/models/rfq_status.model';

@Component({
  selector: "app-rfq-approval",
  templateUrl: "./rfq-approval.component.html",
  styleUrls: ["./rfq-approval.component.scss"]
})
export class RfqApprovalComponent implements OnInit {
  public modalRef: BsModalRef;
  submit = false;
  rfq_data: RfqData[];
  clientOne: ClientData[];
  userForm: FormGroup;
  itemsForm: FormGroup;
  rfq_number: number;
  index: number;

  @ViewChild("staticTabs", { static: false }) staticTabs: TabsetComponent;

  users = [
    { user_name: "Davis", department: "Front desk" },
    { user_name: "Maria", department: "Sales" },
    { user_name: "Sharon", department: "Front desk" }
  ];

  rfq_sources = [
    { source_name: "Walk in" },
    { source_name: "Email" },
    { source_name: "Sales and Marketing" },
    { source_name: "Bids" }
  ];

  rfqs: RfqData[] = [
    {
      rfq_id: "RFQ023100",
      stock_id: "BMS104",
      item_name: "School Bags",
      unit: "Pieces",
      unit_cost: 10000,
      qty_required: 23,
      total_cost: null
    },
    {
      rfq_id: "RFQ100293",
      stock_id: "BMS012",
      item_name: "Branded Laptops",
      unit: "Pieces",
      unit_cost: 1000000,
      qty_required: 23,
      total_cost: null
    },
    {
      rfq_id: "RFQ100293",
      stock_id: "BMS128",
      item_name: "Bannerz",
      unit: "Pieces",
      unit_cost: 340000,
      qty_required: 100,
      total_cost: null
    },
    {
      rfq_id: "RFQ000221",
      stock_id: "BMS144",
      item_name: "Branded Pens",
      unit: "Boxes",
      unit_cost: 30000,
      qty_required: 50,
      total_cost: null
    },
    {
      rfq_id: "RFQ023100",
      stock_id: "BMS104",
      item_name: "School Bags",
      unit: "Pieces",
      unit_cost: 10000,
      qty_required: 23,
      total_cost: null
    },
    {
      rfq_id: "RFQ100293",
      stock_id: "BMS012",
      item_name: "Branded Laptops",
      unit: "Pieces",
      unit_cost: 1000000,
      qty_required: 23,
      total_cost: null
    },
    {
      rfq_id: "RFQ000023",
      stock_id: "BMS128",
      item_name: "Bannerz",
      unit: "Pieces",
      unit_cost: 340000,
      qty_required: 100,
      total_cost: null
    },
    {
      rfq_id: "RFQ000221",
      stock_id: "BMS144",
      item_name: "Branded Pens",
      unit: "Boxes",
      unit_cost: 30000,
      qty_required: 50,
      total_cost: null
    }
  ];

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

  clients: ClientData[] = [
    {
      client_id: "BC131212",
      client_name: "KCB",
      phone_number: 753134341,
      email: "procurement@kcb-ug.com"
    },
    {
      client_id: "BC121233",
      client_name: "Sheraton Hotel",
      phone_number: 772443208,
      email: "procurement@sheratonhotel.com"
    },
    {
      client_id: "BC031526",
      client_name: "Shell",
      phone_number: 751781341,
      email: "supplies@shell.co.ug"
    },
    {
      client_id: "BC107252",
      client_name: "MTN",
      phone_number: 782100042,
      email: "procurement@mtn.co.ug"
    }
  ];

  rfq_table: RfqTable[] = [
    {
      rfq_id: "RFQ023100",
      client_name: "MTN",
      rfq_source: "Walk in",
      no_of_items: 10,
      total_amount: 4000000,
      department: "Front Desk",
      user_name: "Michelle Ssemwogerere"
    },
    {
      rfq_id: "RFQ100293",
      client_name: "Sheraton Hotel",
      rfq_source: "Sales & Marketing",
      no_of_items: 44,
      total_amount: 15300000,
      department: "Sales & Marketing",
      user_name: "Odong George"
    },
    {
      rfq_id: "RFQ000023",
      client_name: "Shell",
      rfq_source: "Email",
      no_of_items: 210,
      total_amount: 5250000,
      department: "Front Desk",
      user_name: "Bright Iryn"
    },
    {
      rfq_id: "RFQ000221",
      client_name: "KCB",
      rfq_source: "Bids",
      no_of_items: 30,
      total_amount: 42000000,
      department: "Front Desk",
      user_name: "Anita Arigye"
    }
  ];

  rfq_status: RfqStatus[] = [
    {
      rfq_id: "RFQ023100",
      user_name: "Michelle Ssemwogerere",
      movt_status: "Created",
      process_status: "Pending costing",
      movt_timestamp: "27/11/2019"
    },
    {
      rfq_id: "RFQ100293",
      user_name: "Odong George",
      movt_status: "Received",
      process_status: "Costed",
      movt_timestamp: "13/11/2019"
    },
    {
      rfq_id: "RFQ000023",
      user_name: "Bright Iryn",
      movt_status: "Deferred",
      process_status: "Pending costing",
      movt_timestamp: "18/4/2020"
    },
    {
      rfq_id: "RFQ000221",
      user_name: "Anita Arigye",
      movt_status: "Approved",
      process_status: "Costed",
      movt_timestamp: "05/03/2020"
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
      rfq_number: [
        { value: this.setRfqId(), disabled: true },
        Validators.compose([Validators.required])
      ],
      client_name: ["", Validators.compose([Validators.required])],

      source_name: [
        "",
        Validators.compose([Validators.required, Validators.minLength(4)])
      ]
      // source_status: ["", Validators.compose([Validators.required])]
    });
  }

  addItemsFormGroup() {
    return this._formbuilder.group({
      rfq_number: [
        { value: "", disabled: true },
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],

      client_name: ["", Validators.compose([Validators.required])],

      addItem: this._formbuilder.array([this.itemdets()])
    });
  }

  itemdets() {
    return this._formbuilder.group({
      stock_id: [
        "",
        // { value: '', disabled: false },

        Validators.compose([Validators.required, Validators.minLength(5)])
        // { updateOn: 'blur' }
      ],

      item_name: ["", Validators.compose([Validators.required])],

      unit: [
        { value: "", disabled: true },
        Validators.compose([Validators.required])
      ],

      unit_cost: [
        { value: "", disabled: true },
        Validators.compose([Validators.required])
      ],
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

      total_cost: [
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

  //method for filtering clients
  filterClients(clientId: string) {
    this.clientOne = this.clients.filter(
      clinet => clinet.client_name === clientId
    );
  }
  //method for filtering rfqs
  filterRfqs(rfqId: string) {
    console.log
      (this.rfq_data = this.rfqs.filter(rfq => rfq.rfq_id === rfqId))
    ;
  }

  //method for updating client name
  updateName(name: string) {
    this.fval.client_name.setValue(name);
  }

  //method for generating random number
  getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //method for setting the random number
  setRfqId() {
    return (this.rfq_number = this.getRandomNumberBetween(10000, 20000));
  }

  //method for creating modal
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  //get function of itemsForm for getting the addItem form array
  get items(): FormArray {
    return this.itemsForm.get("addItem") as FormArray;
  }

  //get function for userForm form controls
  get fval() {
    return this.userForm.controls;
  }

  //get function for itemsForm form controls
  get fcont() {
    return this.itemsForm.controls;
  }

  get clientName(): any {
    return this.userForm.get("client_name");
  }

  onSubmit() {
    this.submit = true;
    this.userForm.value;
  }
}
