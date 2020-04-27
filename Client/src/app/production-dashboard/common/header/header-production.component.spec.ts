import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProductionComponent } from './header-production.component';

describe('HeaderProductionComponent ', () => {
  let component: HeaderProductionComponent ;
  let fixture: ComponentFixture<HeaderProductionComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderProductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderProductionComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
