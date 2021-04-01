import { RfqTable } from "src/app/shared/models/rfq_table.model";
import { Component, OnInit, TemplateRef } from "@angular/core";
import { RfqStatus } from "src/app/shared/models/rfq_status.model";
import { BsModalService, BsModalRef } from "ngx-bootstrap";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"],
})
export class AdminDashboardComponent implements OnInit {
  public modalRef: BsModalRef;
  user: string;
  index: number;
  rfqStat = [];

  rfqTable: RfqTable[] = [
    {
      rfqId: "RFQ023100",
      clientName: "MTN",
      rfqSource: "Walk in",
      noOfItems: 10,
      totalAmount: 4000000,
      department: "Front Desk",
      userName: "Michelle Ssemwogerere",
    },
    {
      rfqId: "RFQ100293",
      clientName: "Sheraton Hotel",
      rfqSource: "Sales & Marketing",
      noOfItems: 44,
      totalAmount: 15300000,
      department: "Sales & Marketing",
      userName: "Odong George",
    },
    {
      rfqId: "RFQ023100",
      clientName: "MTN",
      rfqSource: "Walk in",
      noOfItems: 10,
      totalAmount: 4000000,
      department: "Front Desk",
      userName: "Michelle Ssemwogerere",
    },
    {
      rfqId: "RFQ100293",
      clientName: "Sheraton Hotel",
      rfqSource: "Sales & Marketing",
      noOfItems: 44,
      totalAmount: 15300000,
      department: "Sales & Marketing",
      userName: "Odong George",
    },
    {
      rfqId: "RFQ023100",
      clientName: "MTN",
      rfqSource: "Walk in",
      noOfItems: 10,
      totalAmount: 4000000,
      department: "Front Desk",
      userName: "Michelle Ssemwogerere",
    },
    {
      rfqId: "RFQ100293",
      clientName: "Sheraton Hotel",
      rfqSource: "Sales & Marketing",
      noOfItems: 44,
      totalAmount: 15300000,
      department: "Sales & Marketing",
      userName: "Odong George",
    },
    {
      rfqId: "RFQ023100",
      clientName: "MTN",
      rfqSource: "Walk in",
      noOfItems: 10,
      totalAmount: 4000000,
      department: "Front Desk",
      userName: "Michelle Ssemwogerere",
    },
    {
      rfqId: "RFQ100293",
      clientName: "Sheraton Hotel",
      rfqSource: "Sales & Marketing",
      noOfItems: 44,
      totalAmount: 15300000,
      department: "Sales & Marketing",
      userName: "Odong George",
    },
    {
      rfqId: "RFQ023100",
      clientName: "MTN",
      rfqSource: "Walk in",
      noOfItems: 10,
      totalAmount: 4000000,
      department: "Front Desk",
      userName: "Michelle Ssemwogerere",
    },
    {
      rfqId: "RFQ100293",
      clientName: "Sheraton Hotel",
      rfqSource: "Sales & Marketing",
      noOfItems: 44,
      totalAmount: 15300000,
      department: "Sales & Marketing",
      userName: "Odong George",
    },
    {
      rfqId: "RFQ023100",
      clientName: "MTN",
      rfqSource: "Walk in",
      noOfItems: 10,
      totalAmount: 4000000,
      department: "Front Desk",
      userName: "Michelle Ssemwogerere",
    },
    {
      rfqId: "RFQ100293",
      clientName: "Sheraton Hotel",
      rfqSource: "Sales & Marketing",
      noOfItems: 44,
      totalAmount: 15300000,
      department: "Sales & Marketing",
      userName: "Odong George",
    },
    {
      rfqId: "RFQ023100",
      clientName: "MTN",
      rfqSource: "Walk in",
      noOfItems: 10,
      totalAmount: 4000000,
      department: "Front Desk",
      userName: "Michelle Ssemwogerere",
    },
    {
      rfqId: "RFQ100293",
      clientName: "Sheraton Hotel",
      rfqSource: "Sales & Marketing",
      noOfItems: 44,
      totalAmount: 15300000,
      department: "Sales & Marketing",
      userName: "Odong George",
    },
    {
      rfqId: "RFQ000023",
      clientName: "Shell",
      rfqSource: "Email",
      noOfItems: 210,
      totalAmount: 5250000,
      department: "Front Desk",
      userName: "Bright Iryn",
    },
    {
      rfqId: "RFQ000221",
      clientName: "KCB",
      rfqSource: "Bids",
      noOfItems: 30,
      totalAmount: 42000000,
      department: "Front Desk",
      userName: "Anita Arigye",
    },
  ];
  rfqStatus: RfqStatus[] = [
    {
      rfqId: "RFQ023100",
      userName: "Michelle Ssemwogerere",
      movtStatus: "Created",
      processStatus: "Pending costing",
      movtTimestamp: "27/11/2019",
    },
    {
      rfqId: "RFQ100293",
      userName: "Odong George",
      movtStatus: "Received",
      processStatus: "Costed",
      movtTimestamp: "13/11/2019",
    },
    {
      rfqId: "RFQ000023",
      userName: "Bright Iryn",
      movtStatus: "Deferred",
      processStatus: "Pending costing",
      movtTimestamp: "18/4/2020",
    },
    {
      rfqId: "RFQ000221",
      userName: "Anita Arigye",
      movtStatus: "Approved",
      processStatus: "Costed",
      movtTimestamp: "05/03/2020",
    },
  ];

  constructor(private modalService: BsModalService) {}

  ngOnInit() {}

  // method for calculating rfqs pending costing
  countPending() {
    for (let i = 0; i < this.rfqStatus.length; i++) {
      if (
        this.rfqStatus.find((item) => item.processStatus == "Pending costing")
      ) {
        const removed = this.rfqStatus.splice(i, 1);
        this.rfqStat.push(removed);
      }
    }
    this.rfqStatus.concat(this.rfqStat);
    return this.rfqStat.length;
  }

  //modal for displaying rfqs list
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: "modal-dialog-center modal-xl" })
    );
  }
}
