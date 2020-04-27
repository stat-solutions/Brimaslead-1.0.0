import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPanelSalesMarketComponent } from './right-panel-sales-market.component';

describe('RightPanelSalesMarketComponent', () => {
  let component: RightPanelSalesMarketComponent;
  let fixture: ComponentFixture<RightPanelSalesMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightPanelSalesMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightPanelSalesMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
