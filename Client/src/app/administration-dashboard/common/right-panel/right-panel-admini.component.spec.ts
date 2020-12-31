import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPanelAdminiComponent } from './right-panel-admini.component';

describe('RightPanelAdminiComponent', () => {
  let component: RightPanelAdminiComponent;
  let fixture: ComponentFixture<RightPanelAdminiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RightPanelAdminiComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightPanelAdminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
