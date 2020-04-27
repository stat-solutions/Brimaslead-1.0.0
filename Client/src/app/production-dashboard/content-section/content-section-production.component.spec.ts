import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSectionProductionComponent } from './content-section-production.component';

describe('ContentSectionProductionComponent', () => {
  let component: ContentSectionProductionComponent;
  let fixture: ComponentFixture<ContentSectionProductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSectionProductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSectionProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
