import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWebPageComponent } from './home-web-page.component';

describe('HomeWebPageComponent', () => {
  let component: HomeWebPageComponent;
  let fixture: ComponentFixture<HomeWebPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWebPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWebPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
