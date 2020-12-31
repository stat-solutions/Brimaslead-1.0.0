import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PagesCoreadminiComponent } from './pages-core-admini.component';


describe('PagesCoreComponent', () => {
  let component: PagesCoreadminiComponent;
  let fixture: ComponentFixture<PagesCoreadminiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesCoreadminiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesCoreadminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
