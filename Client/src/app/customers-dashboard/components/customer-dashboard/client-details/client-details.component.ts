import { ClientData } from '../../../../shared/models/other-models/client_data.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-client-details",
  templateUrl: "./client-details.component.html",
  styleUrls: ["./client-details.component.sass"]
})
export class ClientDetailsComponent implements OnInit {
  clients: ClientData[] = [
    {
      client_id: "BC131212",
      client_name: "KCB",
      phone_number: '0753134341',
      email: "procurement@kcb-ug.com"
    },
    {
      client_id: "BC121233",
      client_name: "Sheraton Hotel",
      phone_number: '0772443208',
      email: "procurement@sheratonhotel.com"
    },
    {
      client_id: "BC031526",
      client_name: "Shell",
      phone_number: '0751781341',
      email: "supplies@shell.co.ug"
    },
    {
      client_id: "BC107252",
      client_name: "MTN",
      phone_number: '0782100042',
      email: "procurement@mtn.co.ug"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
