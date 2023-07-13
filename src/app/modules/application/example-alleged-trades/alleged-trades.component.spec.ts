import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllegedTradesComponent } from './alleged-trades.component';

describe('AllegedTradesComponent', () => {
  let component: AllegedTradesComponent;
  let fixture: ComponentFixture<AllegedTradesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllegedTradesComponent]
    });
    fixture = TestBed.createComponent(AllegedTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
