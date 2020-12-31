import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAdministrationComponent } from "./header-administration.component";

describe("HeaderAdministrationComponent", () => {
  let component: HeaderAdministrationComponent;
  let fixture: ComponentFixture<HeaderAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderAdministrationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
