import { TestBed } from '@angular/core/testing';

import { AuthlogsInterceptor } from './authlogs.interceptor';

describe('AuthlogsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthlogsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthlogsInterceptor = TestBed.inject(AuthlogsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
