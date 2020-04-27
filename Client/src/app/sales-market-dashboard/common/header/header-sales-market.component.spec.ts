import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSalesMarketComponent } from './header-sales-market.component';

describe('HeaderSalesMarketComponent', () => {
  let component: HeaderSalesMarketComponent;
  let fixture: ComponentFixture<HeaderSalesMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSalesMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSalesMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
