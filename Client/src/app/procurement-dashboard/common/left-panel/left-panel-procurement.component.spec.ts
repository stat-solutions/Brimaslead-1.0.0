import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPanelProcurementComponent } from './left-panel-procurement.component';

describe('LeftPanelProcurementComponent', () => {
  let component: LeftPanelProcurementComponent;
  let fixture: ComponentFixture<LeftPanelProcurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftPanelProcurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPanelProcurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
