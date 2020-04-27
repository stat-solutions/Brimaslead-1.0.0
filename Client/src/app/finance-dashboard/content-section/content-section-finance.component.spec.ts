import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSectionFinanceComponent } from './content-section-finance.component';

describe('ContentSectionFinanceComponent', () => {
  let component: ContentSectionFinanceComponent;
  let fixture: ComponentFixture<ContentSectionFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSectionFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSectionFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
