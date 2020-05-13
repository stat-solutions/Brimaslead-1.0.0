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
import { EditRfqComponent } from './edit-rfq.component';

@Component({
  selector: "app-rfq-approval",
  templateUrl: "./rfq-approval.component.html",
  styleUrls: ["./rfq-approval.component.scss"]
})
export class RfqApprovalComponent implements OnInit {
  public modalRef: BsModalRef;
  submit = false;
  rfqData: RfqData[];
  clientOne: ClientData[];
  userForm: FormGroup;
  itemsForm: FormGroup;
  rfqNumber: number;
  index: number;
  showTable = true;
  showEditTable = false;

  @ViewChild("staticTabs", { static: false }) staticTabs: TabsetComponent;

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

  rfqs: RfqData[] = [
    {
      rfqId: "RFQ023100",
      stockId: "BMS104",
      itemName: "School Bags",
      unit: "Pieces",
      unitCost: 10000,
      qtyRequired: 23,
      totalCost: null,
      isEditable: false
    },
    {
      rfqId: "RFQ100293",
      stockId: "BMS012",
      itemName: "Branded Laptops",
      unit: "Pieces",
      unitCost: 1000000,
      qtyRequired: 23,
      totalCost: null,
      isEditable: false
    },
    {
      rfqId: "RFQ100293",
      stockId: "BMS128",
      itemName: "Bannerz",
      unit: "Pieces",
      unitCost: 340000,
      qtyRequired: 100,
      totalCost: null,
      isEditable: false
    },
    {
      rfqId: "RFQ000221",
      stockId: "BMS144",
      itemName: "Branded Pens",
      unit: "Boxes",
      unitCost: 30000,
      qtyRequired: 50,
      totalCost: null,
      isEditable: false
    },
    {
      rfqId: "RFQ023100",
      stockId: "BMS104",
      itemName: "School Bags",
      unit: "Pieces",
      unitCost: 10000,
      qtyRequired: 23,
      totalCost: null,
      isEditable: false
    },
    {
      rfqId: "RFQ100293",
      stockId: "BMS012",
      itemName: "Branded Laptops",
      unit: "Pieces",
      unitCost: 1000000,
      qtyRequired: 23,
      totalCost: null,
      isEditable: false
    },
    {
      rfqId: "RFQ000023",
      stockId: "BMS128",
      itemName: "Bannerz",
      unit: "Pieces",
      unitCost: 340000,
      qtyRequired: 100,
      totalCost: null,
      isEditable: false
    },
    {
      rfqId: "RFQ000221",
      stockId: "BMS144",
      itemName: "Branded Pens",
      unit: "Boxes",
      unitCost: 30000,
      qtyRequired: 50,
      totalCost: null,
      isEditable: false
    }
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

  rfqTable: RfqTable[] = [
    {
      rfqId: "RFQ023100",
      clientName: "MTN",
      rfqSource: "Walk in",
      noOfItems: 10,
      totalAmount: 4000000,
      department: "Front Desk",
      userName: "Michelle Ssemwogerere"
    },
    {
      rfqId: "RFQ100293",
      clientName: "Sheraton Hotel",
      rfqSource: "Sales & Marketing",
      noOfItems: 44,
      totalAmount: 15300000,
      department: "Sales & Marketing",
      userName: "Odong George"
    },
    {
      rfqId: "RFQ000023",
      clientName: "Shell",
      rfqSource: "Email",
      noOfItems: 210,
      totalAmount: 5250000,
      department: "Front Desk",
      userName: "Bright Iryn"
    },
    {
      rfqId: "RFQ000221",
      clientName: "KCB",
      rfqSource: "Bids",
      noOfItems: 30,
      totalAmount: 42000000,
      department: "Front Desk",
      userName: "Anita Arigye"
    }
  ];

  rfqStatus: RfqStatus[] = [
    {
      rfqId: "RFQ023100",
      userName: "Michelle Ssemwogerere",
      movtStatus: "Created",
      processStatus: "Pending costing",
      movtTimestamp: "27/11/2019"
    },
    {
      rfqId: "RFQ100293",
      userName: "Odong George",
      movtStatus: "Received",
      processStatus: "Costed",
      movtTimestamp: "13/11/2019"
    },
    {
      rfqId: "RFQ000023",
      userName: "Bright Iryn",
      movtStatus: "Deferred",
      processStatus: "Pending costing",
      movtTimestamp: "18/4/2020"
    },
    {
      rfqId: "RFQ000221",
      userName: "Anita Arigye",
      movtStatus: "Approved",
      processStatus: "Costed",
      movtTimestamp: "05/03/2020"
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

      addItem: this._formbuilder.array([this.itemdets()])
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

      itemName: ["", Validators.compose([Validators.required])],

      unit: [
        { value: "", disabled: true },
        Validators.compose([Validators.required])
      ],

      unitCost: [
        { value: "", disabled: true },
        Validators.compose([Validators.required])
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

  //method for filtering clients
  filterClients(clientId: string) {
    this.clientOne = this.clients.filter(
      clinet => clinet.clientName === clientId
    );
  }
  //method for filtering rfqs
  filterRfqs(rfqId: string) {
    this.rfqData = this.rfqs.filter(rfq => rfq.rfqId === rfqId);
  }
  //method for filtering rfqs
  filterRfq(rfqId: string) {
    this.rfqData = this.rfqs.filter(rfq => rfq.rfqId === rfqId);
    this.showTable = !this.showTable;
    this.showEditTable = !this.showEditTable
  }

  //method for updating client name
  updateName(name: string) {
    this.fval.clientName.setValue(name);
  }

  //method for generating random number
  getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //method for setting the random number
  setRfqId() {
    return (this.rfqNumber = this.getRandomNumberBetween(10000, 20000));
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
    return this.userForm.get("clientName");
  }

  onSubmit() {
    this.submit = true;
    this.userForm.value;
  }
}
