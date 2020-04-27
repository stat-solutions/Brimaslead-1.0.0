import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSectionSuppliersComponent } from './content-section-suppliers.component';

describe('ContentSectionSuppliersComponent', () => {
  let component: ContentSectionSuppliersComponent;
  let fixture: ComponentFixture<ContentSectionSuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSectionSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSectionSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
