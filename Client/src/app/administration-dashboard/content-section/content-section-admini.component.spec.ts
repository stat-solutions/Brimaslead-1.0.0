import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSectionAdminiComponent } from './content-section-admini.component';

describe('ContentSectionComponent', () => {
  let component: ContentSectionAdminiComponent;
  let fixture: ComponentFixture<ContentSectionAdminiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContentSectionAdminiComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSectionAdminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
