import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignCreativeProfileComponent } from './design-creative-profile.component';

describe('DesignCreativeProfileComponent', () => {
  let component: DesignCreativeProfileComponent;
  let fixture: ComponentFixture<DesignCreativeProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignCreativeProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignCreativeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
