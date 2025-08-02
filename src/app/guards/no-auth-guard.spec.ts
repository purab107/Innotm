import { TestBed } from '@angular/core/testing';
import { NoAuthGuard } from './no-auth-guard';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('NoAuthGuard', () => {
  let guard: NoAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [NoAuthGuard],
    });

    guard = TestBed.inject(NoAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow activation (mocked logic)', () => {
    expect(guard.canActivate()).toBeTrue(); // or false depending on your guard logic
  });
});
