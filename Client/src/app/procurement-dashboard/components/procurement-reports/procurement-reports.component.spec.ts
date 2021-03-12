import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementReportsComponent } from './procurement-reports.component';

describe('ProcurementReportsComponent', () => {
  let component: ProcurementReportsComponent;
  let fixture: ComponentFixture<ProcurementReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcurementReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurementReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
