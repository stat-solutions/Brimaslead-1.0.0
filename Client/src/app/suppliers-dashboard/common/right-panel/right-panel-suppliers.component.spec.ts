import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPanelSuppliersComponent } from './right-panel-suppliers.component';

describe('RightPanelSuppliersComponent', () => {
  let component: RightPanelSuppliersComponent;
  let fixture: ComponentFixture<RightPanelSuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightPanelSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightPanelSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
