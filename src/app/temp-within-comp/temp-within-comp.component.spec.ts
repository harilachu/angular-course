import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempWithinCompComponent } from './temp-within-comp.component';

describe('TempWithinCompComponent', () => {
  let component: TempWithinCompComponent;
  let fixture: ComponentFixture<TempWithinCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempWithinCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempWithinCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
