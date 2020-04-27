import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPanelProductionComponent  } from './left-panel-production.component';

describe('LeftPanelProductionComponent ', () => {
  let component: LeftPanelProductionComponent ;
  let fixture: ComponentFixture<LeftPanelProductionComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftPanelProductionComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPanelProductionComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
