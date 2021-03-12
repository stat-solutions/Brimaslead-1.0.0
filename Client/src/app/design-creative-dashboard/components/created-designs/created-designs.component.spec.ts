import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedDesignsComponent } from './created-designs.component';

describe('CreatedDesignsComponent', () => {
  let component: CreatedDesignsComponent;
  let fixture: ComponentFixture<CreatedDesignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedDesignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
