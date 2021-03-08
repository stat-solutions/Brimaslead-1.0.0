import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDesignCreativeComponent } from './header-design-creative.component';

describe('HeaderDesignCreativeComponent', () => {
  let component: HeaderDesignCreativeComponent;
  let fixture: ComponentFixture<HeaderDesignCreativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderDesignCreativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDesignCreativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
