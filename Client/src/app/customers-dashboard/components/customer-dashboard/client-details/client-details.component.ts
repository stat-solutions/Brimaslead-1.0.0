import { ClientData } from '../../../../shared/models/other-models/client_data.model';
import { Component, OnInit } from '@angular/core';
import { ClientRfqData } from 'src/app/front-desk/front-desk-dashboard/request-for-quote/request-for-quote.component';

@Component({
  selector: "app-client-details",
  templateUrl: "./client-details.component.html",
  styleUrls: ["./client-details.component.sass"]
})
export class ClientDetailsComponent implements OnInit {
  clients: ClientRfqData[] = [
    {
      clientId: "BC131212",
      clientName: "KCB",
      phoneNumber: '0753134341',
      email: "procurement@kcb-ug.com"
    },
    {
      clientId: "BC121233",
      clientName: "Sheraton Hotel",
      phoneNumber: '0772443208',
      email: "procurement@sheratonhotel.com"
    },
    {
      clientId: "BC031526",
      clientName: "Shell",
      phoneNumber: '0751781341',
      email: "supplies@shell.co.ug"
    },
    {
      clientId: "BC107252",
      clientName: "MTN",
      phoneNumber: '0782100042',
      email: "procurement@mtn.co.ug"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
