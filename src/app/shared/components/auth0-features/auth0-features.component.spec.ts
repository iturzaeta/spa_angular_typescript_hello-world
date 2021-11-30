import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth0FeaturesComponent } from './auth0-features.component';

describe('NextStepsComponent', () => {
  let component: Auth0FeaturesComponent;
  let fixture: ComponentFixture<Auth0FeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Auth0FeaturesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Auth0FeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
