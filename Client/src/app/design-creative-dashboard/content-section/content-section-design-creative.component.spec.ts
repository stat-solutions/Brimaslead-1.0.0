import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSectionDesignCreativeComponent } from './content-section-design-creative.component';

describe('ContentSectionDesignCreativeComponent', () => {
  let component: ContentSectionDesignCreativeComponent;
  let fixture: ComponentFixture<ContentSectionDesignCreativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSectionDesignCreativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSectionDesignCreativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
