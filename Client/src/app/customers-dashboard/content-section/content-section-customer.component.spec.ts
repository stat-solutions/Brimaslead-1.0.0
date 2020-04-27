import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSectionCustomerComponent } from './content-section-customer.component';

describe('ContentSectionCustomerComponent', () => {
  let component: ContentSectionCustomerComponent;
  let fixture: ComponentFixture<ContentSectionCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSectionCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSectionCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
