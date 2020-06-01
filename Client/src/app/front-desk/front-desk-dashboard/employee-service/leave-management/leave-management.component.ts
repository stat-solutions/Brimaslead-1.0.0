import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/shared/services/other-services/layout.service';

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.sass']
})
export class LeaveManagementComponent implements OnInit {

  constructor(private layoutService: LayoutService) {

  }

  ngOnInit() {

  }

}
