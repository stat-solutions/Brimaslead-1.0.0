import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PagesCoreSuppliersComponent } from './pages-core-suppliers.component';


describe('PagesCoreSuppliersComponent', () => {
  let component: PagesCoreSuppliersComponent;
  let fixture: ComponentFixture<PagesCoreSuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesCoreSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesCoreSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
