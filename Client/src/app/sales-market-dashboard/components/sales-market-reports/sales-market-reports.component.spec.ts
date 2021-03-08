import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesMarketReportsComponent } from './sales-market-reports.component';

describe('SalesMarketReportsComponent', () => {
  let component: SalesMarketReportsComponent;
  let fixture: ComponentFixture<SalesMarketReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesMarketReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesMarketReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
