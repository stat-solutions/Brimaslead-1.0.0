import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSectionQaComponent } from './content-section-qa.component';

describe('ContentSectionQaComponent', () => {
  let component: ContentSectionQaComponent;
  let fixture: ComponentFixture<ContentSectionQaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSectionQaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSectionQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
