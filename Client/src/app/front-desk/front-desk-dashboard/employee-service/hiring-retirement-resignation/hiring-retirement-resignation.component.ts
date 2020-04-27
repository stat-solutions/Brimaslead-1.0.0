import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/shared/services/layout.service';

@Component({
  selector: 'app-hiring-retirement-resignation',
  templateUrl: './hiring-retirement-resignation.component.html',
  styleUrls: ['./hiring-retirement-resignation.component.sass']
})
export class HiringRetirementResignationComponent implements OnInit {
  theNumber: number;

  constructor(private layoutService: LayoutService) {

  }

  ngOnInit() {



  }

}
