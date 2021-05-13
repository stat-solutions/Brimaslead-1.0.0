import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPanelQaComponent } from './right-panel-qa.component';

describe('RightPanelQaComponent', () => {
  let component: RightPanelQaComponent;
  let fixture: ComponentFixture<RightPanelQaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightPanelQaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightPanelQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
