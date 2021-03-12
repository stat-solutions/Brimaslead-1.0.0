import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionReportsComponent } from './production-reports.component';

describe('ProductionReportsComponent', () => {
  let component: ProductionReportsComponent;
  let fixture: ComponentFixture<ProductionReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
