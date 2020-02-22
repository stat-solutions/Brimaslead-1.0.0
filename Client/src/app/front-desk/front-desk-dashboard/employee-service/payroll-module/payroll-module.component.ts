import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-payroll-module',
  templateUrl: './payroll-module.component.html',
  styleUrls: ['./payroll-module.component.sass']
})
export class PayrollModuleComponent implements OnInit {

  constructor(private layoutService: LayoutService) {

  }

  ngOnInit() {

    this.layoutService.setThePanelNow('Payroll Managment');
  }

}
