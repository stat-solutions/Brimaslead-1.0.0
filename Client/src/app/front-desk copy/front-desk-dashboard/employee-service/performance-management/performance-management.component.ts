import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/shared/services/layout.service';

@Component({
  selector: 'app-performance-management',
  templateUrl: './performance-management.component.html',
  styleUrls: ['./performance-management.component.sass']
})
export class PerformanceManagementComponent implements OnInit {

  constructor(private layoutService: LayoutService) {

  }

  ngOnInit() {

  }
  //   this.layoutService.setThePanelNow('Performance Managment');

}
