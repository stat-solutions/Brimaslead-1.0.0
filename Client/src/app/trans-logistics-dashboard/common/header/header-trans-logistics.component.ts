import { Component, OnInit, Input } from '@angular/core';
import { LayoutService } from '../../../shared/services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header-trans-logistics.component.html',
  styleUrls: ['./header-trans-logistics.component.scss']
})
export class HeaderTransLogisticsComponent implements OnInit {
  @Input() navLayout: string;
  @Input() defaultNavbar: string;
  @Input() toggleNavbar: string;
  @Input() toggleStatus: boolean;
  @Input() navbarEffect: string;
  @Input() deviceType: string;
  @Input() headerColorTheme: string;
  @Input() leftHeaderColorTheme: string;
  @Input() navbarColorTheme: string;
  @Input() activeNavColorTheme: string;
  @Input() headerHeight: number;
  @Input() collapsedLeftHeader: boolean;

  constructor( private layoutService: LayoutService) { }
  imageUrl: string;
  ngOnInit() {

  }

  changeTheToggleStatus() {
    this.layoutService.getToggleStatus();
  }

}
