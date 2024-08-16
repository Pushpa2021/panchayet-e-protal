import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftPlanComponent } from './draft-plan.component';

describe('DraftPlanComponent', () => {
  let component: DraftPlanComponent;
  let fixture: ComponentFixture<DraftPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DraftPlanComponent]
    });
    fixture = TestBed.createComponent(DraftPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
