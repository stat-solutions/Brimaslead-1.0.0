import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPanelFinanceComponent } from './right-panel-finance.component';

describe('RightPanelFinanceComponent', () => {
  let component: RightPanelFinanceComponent;
  let fixture: ComponentFixture<RightPanelFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightPanelFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightPanelFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
