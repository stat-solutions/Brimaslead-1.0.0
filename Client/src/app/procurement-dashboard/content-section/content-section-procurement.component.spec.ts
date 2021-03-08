import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSectionProcurementComponent } from './content-section-procurement.component';

describe('ContentSectionProcurementComponent', () => {
  let component: ContentSectionProcurementComponent;
  let fixture: ComponentFixture<ContentSectionProcurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSectionProcurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSectionProcurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
