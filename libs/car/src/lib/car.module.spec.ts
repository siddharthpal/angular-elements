import { async, TestBed } from '@angular/core/testing';
import { CarModule } from './car.module';

describe('CarModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CarModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CarModule).toBeDefined();
  });
});
