import { RfqTable } from "src/app/shared/models/rfq_table.model";
import { Component, OnInit, TemplateRef } from "@angular/core";
import { RfqStatus } from "src/app/shared/models/rfq_status.model";
import { BsModalService, BsModalRef } from "ngx-bootstrap";
import { Chart } from "chart.js";

@Component({
  selector: "app-management-dashboard",
  templateUrl: "./management-dashboard.component.html",
  styleUrls: ["./management-dashboard.component.scss"],
})
export class ManagementDashboardComponent implements OnInit {
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

  lineChartData: Chart.ChartDataSets[] = [
    {
      label: "Payables",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [44, 56, 55, 66, 33, 44, 66, 88, 98, 90, 67, 45],
    },
    {
      label: "Orders",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,190,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [20, 59, 73, 61, 56, 40, 70, 23, 45, 67, 89, 98],
    },
    {
      label: "RFQs",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,190,190,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [10, 39, 53, 31, 36, 40, 50, 98, 76, 54, 32, 12],
    },
    {
      label: "Receivables",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [35, 79, 53, 31, 36, 40, 60, 56, 57, 24, 35, 78],
    },
  ];
  lineChartLabels: Array<any> = [
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
  ];
  lineChartOptions: any = {
    responsive: true,
  };
  lineChartLegend = true;
  lineChartType = "line";
  inlinePlugin: any;
  textPlugin: any;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {

    //text plugin for graph or chart
        this.textPlugin = [
          {
            id: "textPlugin",
            beforeDraw(chart: any): any {
              const width = chart.chart.width;
              const height = chart.chart.height;
              const ctx = chart.chart.ctx;
              ctx.restore();
              const fontSize = (height / 114).toFixed(2);
              ctx.font = `${fontSize}em sans-serif`;
              ctx.textBaseline = "middle";
              const text = "";
              const textX = Math.round(
                (width - ctx.measureText(text).width) / 2
              );
              const textY = height / 2;
              ctx.fillText(text, textX, textY);
              ctx.save();
            },
          },
        ];

        this.inlinePlugin = this.textPlugin;
  }

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
