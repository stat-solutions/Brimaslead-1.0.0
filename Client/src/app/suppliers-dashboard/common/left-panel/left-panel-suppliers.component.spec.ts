import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPanelSuppliersComponent } from './left-panel-suppliers.component';

describe('LeftPanelSuppliersComponent', () => {
  let component: LeftPanelSuppliersComponent;
  let fixture: ComponentFixture<LeftPanelSuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftPanelSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPanelSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
