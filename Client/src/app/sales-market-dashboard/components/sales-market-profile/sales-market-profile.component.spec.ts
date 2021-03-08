import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesMarketProfileComponent } from './sales-market-profile.component';

describe('SalesMarketProfileComponent', () => {
  let component: SalesMarketProfileComponent;
  let fixture: ComponentFixture<SalesMarketProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesMarketProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesMarketProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
