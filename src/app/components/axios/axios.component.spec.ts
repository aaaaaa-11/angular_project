import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiosComponent } from './axios.component';

describe('AxiosComponent', () => {
  let component: AxiosComponent;
  let fixture: ComponentFixture<AxiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
