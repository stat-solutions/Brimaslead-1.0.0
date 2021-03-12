import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionProfileComponent } from './production-profile.component';

describe('ProductionProfileComponent', () => {
  let component: ProductionProfileComponent;
  let fixture: ComponentFixture<ProductionProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
