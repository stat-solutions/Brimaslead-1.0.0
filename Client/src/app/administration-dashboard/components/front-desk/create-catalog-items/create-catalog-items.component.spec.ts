import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCatalogItemsComponent } from './create-catalog-items.component';

describe('CreateCatalogItemsComponent', () => {
  let component: CreateCatalogItemsComponent;
  let fixture: ComponentFixture<CreateCatalogItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCatalogItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCatalogItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
