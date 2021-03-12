import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPanelDesignCreativeComponent } from './right-panel-design-creative.component';

describe('RightPanelDesignCreativeComponent', () => {
  let component: RightPanelDesignCreativeComponent;
  let fixture: ComponentFixture<RightPanelDesignCreativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightPanelDesignCreativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightPanelDesignCreativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
