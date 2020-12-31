import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtManagementComponent } from './debt-management.component';

describe('DebtManagementComponent', () => {
  let component: DebtManagementComponent;
  let fixture: ComponentFixture<DebtManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
