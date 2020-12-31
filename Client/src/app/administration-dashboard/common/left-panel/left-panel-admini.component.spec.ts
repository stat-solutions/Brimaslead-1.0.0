import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPanelAdminiComponent } from './left-panel-admini.component';

describe("LeftPanelAdminiComponent", () => {
  let component: LeftPanelAdminiComponent;
  let fixture: ComponentFixture<LeftPanelAdminiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeftPanelAdminiComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPanelAdminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
