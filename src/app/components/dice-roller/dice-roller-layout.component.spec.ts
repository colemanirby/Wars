import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceRollerComponent } from './dice-roller-layout.component';

describe('DiceRollerComponent', () => {
  let component: DiceRollerComponent;
  let fixture: ComponentFixture<DiceRollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceRollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceRollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
