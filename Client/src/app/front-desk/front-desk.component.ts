import { Component, OnInit, Input, HostListener } from '@angular/core';
import { LayoutService } from '../shared/services/other-services/layout.service';

@Component({
  selector: 'app-front-desk',
  templateUrl: './front-desk.component.html',
  styleUrls: ['./front-desk.component.scss']
})
export class FrontDeskComponent implements OnInit {

  screenTitle = 'Front Desk-Dashboard';
  accessedPanel: string;
  contentHeight: number;
  @Input() navLayout: string;
  @Input() defaultNavbar: string;
  @Input() toggleNavbar: string;
  @Input() toggleStatus: boolean;
  @Input() navbarEffect: string;
  @Input() deviceType: string;
  @Input() headerColorTheme: string;
  @Input() navbarColorTheme: string;
  @Input() activeNavColorTheme: string;


  constructor(private layoutService: LayoutService) {

  }

  ngOnInit() {
    this.layoutService.contentHeightCast.subscribe(setCtHeight => this.contentHeight = setCtHeight);
    this.setAccessedPanel();
  }
  @HostListener('window:resize', ['$event'])
  onResizeHeight(event: any) {
    this.contentHeight = window.innerHeight - this.layoutService.headerHeight;
  }

  setAccessedPanel() {
    this.accessedPanel = this.layoutService.thePanelNow;
  }



}
