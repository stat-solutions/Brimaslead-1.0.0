import { Component, OnInit, Input } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-front-desk-header',
  templateUrl: './front-desk-header.component.html',
  styleUrls: ['./front-desk-header.component.scss']
})
export class FrontDeskHeaderComponent implements OnInit {

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

  ngOnInit() {

  }
  changeTheToggleStatus() {
    this.layoutService.getToggleStatus();
  }
}
