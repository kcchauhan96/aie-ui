import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfoDifferenceComponent } from './confo-difference.component';

describe('ConfoDifferenceComponent', () => {
  let component: ConfoDifferenceComponent;
  let fixture: ComponentFixture<ConfoDifferenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfoDifferenceComponent]
    });
    fixture = TestBed.createComponent(ConfoDifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
