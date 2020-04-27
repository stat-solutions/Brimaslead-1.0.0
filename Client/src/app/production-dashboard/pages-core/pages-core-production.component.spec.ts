import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PagesCoreProductionComponent } from './pages-core-production.component';


describe('PagesCoreProductionComponent', () => {
  let component: PagesCoreProductionComponent;
  let fixture: ComponentFixture<PagesCoreProductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesCoreProductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesCoreProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
