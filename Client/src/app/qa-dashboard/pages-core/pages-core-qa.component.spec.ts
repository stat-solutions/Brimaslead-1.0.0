import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PagesCoreQaComponent } from './pages-core-qa.component';


describe('PagesCoreQaComponent', () => {
  let component: PagesCoreQaComponent;
  let fixture: ComponentFixture<PagesCoreQaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesCoreQaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesCoreQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
