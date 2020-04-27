import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PagesCoreManagementComponent } from './pages-core-management.component';


describe('PagesCoreComponent', () => {
  let component: PagesCoreManagementComponent;
  let fixture: ComponentFixture<PagesCoreManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesCoreManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesCoreManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
