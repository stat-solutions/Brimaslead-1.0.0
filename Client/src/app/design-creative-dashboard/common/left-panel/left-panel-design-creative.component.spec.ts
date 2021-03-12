import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPanelDesignCreativeComponent } from './left-panel-design-creative.component';

describe('LeftPanelDesignCreativeComponent', () => {
  let component: LeftPanelDesignCreativeComponent;
  let fixture: ComponentFixture<LeftPanelDesignCreativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftPanelDesignCreativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPanelDesignCreativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
