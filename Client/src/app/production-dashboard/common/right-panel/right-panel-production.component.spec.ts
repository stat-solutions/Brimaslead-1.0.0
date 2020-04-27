import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPanelProductionComponent  } from './right-panel-production.component';

describe('RightPanelProductionComponent ', () => {
  let component: RightPanelProductionComponent ;
  let fixture: ComponentFixture<RightPanelProductionComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightPanelProductionComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightPanelProductionComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
