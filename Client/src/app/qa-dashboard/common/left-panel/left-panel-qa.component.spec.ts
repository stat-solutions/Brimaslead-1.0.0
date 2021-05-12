import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPanelQaComponent } from './left-panel-qa.component';

describe('LeftPanelQaComponent', () => {
  let component: LeftPanelQaComponent;
  let fixture: ComponentFixture<LeftPanelQaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftPanelQaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPanelQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
