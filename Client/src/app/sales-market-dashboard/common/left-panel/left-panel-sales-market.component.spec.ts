import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPanelSalesMarketComponent } from './left-panel-sales-market.component';

describe('LeftPanelSalesMarketComponent', () => {
  let component: LeftPanelSalesMarketComponent;
  let fixture: ComponentFixture<LeftPanelSalesMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftPanelSalesMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPanelSalesMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
