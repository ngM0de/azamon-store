import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingRowComponent } from './rating-row.component';

describe('RatingRowComponent', () => {
  let component: RatingRowComponent;
  let fixture: ComponentFixture<RatingRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RatingRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
