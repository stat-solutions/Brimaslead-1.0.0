import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSectionManagementComponent } from './content-section-management.component';

describe('ContentSectionManagementComponent', () => {
  let component: ContentSectionManagementComponent;
  let fixture: ComponentFixture<ContentSectionManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSectionManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSectionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
