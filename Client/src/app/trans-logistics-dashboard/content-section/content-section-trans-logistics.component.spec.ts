import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSectionTransLogisticsComponent } from './content-section-trans-logistics.component';

describe('ContentSectionTransLogisticsComponent', () => {
  let component: ContentSectionTransLogisticsComponent;
  let fixture: ComponentFixture<ContentSectionTransLogisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSectionTransLogisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSectionTransLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
