import { Component, OnInit } from '@angular/core';
import { RfqData } from 'src/app/shared/models/other-models/rfq-data.model';

@Component({
  selector: "app-front-desk-dashboard",
  templateUrl: "./front-desk-dashboard.component.html",
  styleUrls: ["./front-desk-dashboard.component.scss"]
})
export class FrontDeskDashboardComponent implements OnInit {
  user: string;


  constructor() {}

  ngOnInit() {}
}
