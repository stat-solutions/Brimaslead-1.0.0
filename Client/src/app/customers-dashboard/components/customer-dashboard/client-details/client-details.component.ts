import { ClientData } from './../../../../shared/models/client_data.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-client-details",
  templateUrl: "./client-details.component.html",
  styleUrls: ["./client-details.component.sass"]
})
export class ClientDetailsComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {}
}
