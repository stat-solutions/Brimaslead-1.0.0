import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderQaComponent } from './header-qa.component';

describe('HeaderQaComponent', () => {
  let component: HeaderQaComponent;
  let fixture: ComponentFixture<HeaderQaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderQaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
