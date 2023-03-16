import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOfProviderComponent } from './profile-of-provider.component';

describe('ProfileOfProviderComponent', () => {
  let component: ProfileOfProviderComponent;
  let fixture: ComponentFixture<ProfileOfProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileOfProviderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileOfProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
