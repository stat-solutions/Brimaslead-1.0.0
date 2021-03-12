import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProcurementComponent } from './header-procurement.component';

describe('HeaderProcurementComponent', () => {
  let component: HeaderProcurementComponent;
  let fixture: ComponentFixture<HeaderProcurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderProcurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderProcurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
