import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpSuppliersComponent } from './rp-suppliers.component';

describe('RpSuppliersComponent', () => {
  let component: RpSuppliersComponent;
  let fixture: ComponentFixture<RpSuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
