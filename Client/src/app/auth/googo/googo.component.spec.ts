import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogoComponent } from './googo.component';

describe('GoogoComponent', () => {
  let component: GoogoComponent;
  let fixture: ComponentFixture<GoogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
