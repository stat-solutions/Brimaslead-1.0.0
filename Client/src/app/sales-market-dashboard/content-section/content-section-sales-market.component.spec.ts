import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSectionSalesMarketComponent } from './content-section-sales-market.component';

describe('ContentSectionSalesMarketComponent', () => {
  let component: ContentSectionSalesMarketComponent;
  let fixture: ComponentFixture<ContentSectionSalesMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSectionSalesMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSectionSalesMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
