import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from "@angular/router";

import { HomepageComponent } from './homepage.component';
import { WelcomeComponent} from "./welcome/welcome.component";

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageComponent, WelcomeComponent ],
      imports: [ RouterModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
