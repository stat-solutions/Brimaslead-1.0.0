import { Component, OnInit, TemplateRef } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { ItemStock } from "src/app/shared/models/other-models/rfqRelatedModels/item_stock.model";
import { BsModalService, BsModalRef } from "ngx-bootstrap";
import { Observable } from "rxjs";
import { RfqRelatedServiceService } from "src/app/shared/services/front-desk-services/rfq-related-service.service";
import { DbServiceService } from "src/app/shared/services/firestore-db/DbServiceService";
import { CustomerData } from "src/app/shared/models/user-profile/client_data.model";
import { UserData } from "src/app/shared/models/user-profile/user-data";
import { AngularFireAuth } from "@angular/fire/auth";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
export interface ClientRfqData {
  clientId: string;
  clientName: string;
  phoneNumber: string;
  email: string;
}
export interface RfqSumData {
  clientColRef: string;
  clientDocRef: string;
  rfqSerialNumber: string;
  empColRef: string;
  empDocRef: string;
  rfqSource: string;
  noOfItems: number;
  totalAmount: number;
  movementStatus: string;
  /*Forwarded,Received,Deferred*/
  processingStatus: string;
  /*Created,Costed*/
  movementTimestamp: firebase.firestore.FieldValue;
  processingTimestamp: firebase.firestore.FieldValue;
  createdAt: firebase.firestore.FieldValue;
  updatedAt: firebase.firestore.FieldValue;
  rfqStatus: string /*Creation,returned,InternalApproval,ExternalApproval,InternalApproved,InternalApproved,InternalRejected,ExternalRejected,Completed,Archieved*/;
}
export interface RfqSumDataId extends RfqSumData {
  id: string;
}

@Component({
  selector: "app-cost-jobs",
  templateUrl: "./cost-jobs.component.html",
  styleUrls: ["./cost-jobs.component.scss"],
})
export class CostJobsComponent implements OnInit {
  public modalRef: BsModalRef;
  userFilter: any = { clientName: "" };
  rfq: any = {};
  submit = false;
  rfqForm: FormGroup;
  rfq_number: number;
  clientIdNumber: string;
  clientLabel = "Client";
  clientAdded = false;
  skipWalkinApproval = false;
  setApprovalStatus = false;
  clients$: Observable<CustomerData[]>;
  users$: Observable<UserData[]>;
  itemStock$: Observable<ItemStock[]>;
  rfqSummury$: Observable<RfqSumDataId[]>;
  rfq_sources = [
    { rfqSource: "Walk in" },
    { rfqSource: "Email" },
    { rfqSource: "Sales and Marketing" },
    { rfqSource: "Bids" },
  ];

  meta: any;
  option: any;

  constructor(
    private modalService: BsModalService,
    private db: DbServiceService,
    private rfqR: RfqRelatedServiceService,
    private afa: AngularFireAuth,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.rfqForm = this.createFormGroup();
    // this.itemsForm = this.addItemsFormGroup();
    this.clients$ = this.db.colWithIds$<CustomerData>("customerProfile");

    this.rfqSummury$ = this.db.colWithIds$<RfqSumDataId>("rfqSummury", (x) =>
      x.where("rfqStatus", "==", "Creation").orderBy("updatedAt", "desc")
    );
  }

  createFormGroup() {
    return this.fb.group({
      clientColRef: [""],
      clientDocRef: [""],
      empColRef: [""],
      empDocRef: [""],
      noOfItems: [""],
      totalAmount: [""],
      movementStatus: [""],
      processingStatus: [""],
      clientName: ["", Validators.compose([Validators.required])],

      rfqSource: [
        "",
        Validators.compose([Validators.required, Validators.minLength(4)]),
      ],
      sourceStatus: ["", Validators.compose([Validators.required])],
    });
  }

  updateName(name: string, clientId: string) {
    this.clientIdNumber = clientId;
    this.fval.clientName.setValue(name);
    this.clientLabel = "Selected Client";
    this.clientAdded = true;
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: "modal-xl modal-dialog-center" })
    );
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
    if (event.target.value === "Select RFQ source") {
      this.fval.rfqSource.setErrors({ required: true });
    }

    if (event.target.value === "Walk in") {
      this.setApprovalStatus = true;
    } else {
      this.setApprovalStatus = false;
    }
  }

  resetForm() {
    location.reload();
    this.rfqForm.reset();
  }

  get fval() {
    return this.rfqForm.controls;
  }

  get clientName(): any {
    return this.rfqForm.get("clientName");
  }

  showSuccess() {
    this.toastr.success("Rfq creation was successful", "Create RFQ", {
      timeOut: 3000,
      positionClass: "toast-bottom-right",
    });
  }

  createRFQ(rfqForm: FormGroup) {
    this.spinner.show();

    rfqForm.patchValue({
      clientColRef: `customerProfile/${this.clientIdNumber}`,
      clientDocRef: this.clientIdNumber,
      empColRef: `employeeProfile/${this.afa.auth.currentUser.uid}`,
      empDocRef: this.afa.auth.currentUser.uid,
      noOfItems: 0,
      totalAmount: 0,
      movementStatus: "Created",
      processingStatus: "Created",
    });

    this.rfqR.createTheRfq("rfqSummury", rfqForm.value);
    this.rfqForm.reset();
    this.clientAdded = false;

    setTimeout(() => {
      this.spinner.hide();
      this.showSuccess();
    }, 1000);
  }
}
