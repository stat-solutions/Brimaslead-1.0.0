import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementProfileComponent } from './procurement-profile.component';

describe('ProcurementProfileComponent', () => {
  let component: ProcurementProfileComponent;
  let fixture: ComponentFixture<ProcurementProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcurementProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurementProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
