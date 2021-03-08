import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignImplementationComponent } from './design-implementation.component';

describe('DesignImplementationComponent', () => {
  let component: DesignImplementationComponent;
  let fixture: ComponentFixture<DesignImplementationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignImplementationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
