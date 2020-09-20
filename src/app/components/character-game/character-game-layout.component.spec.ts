import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CharacterGameLayoutComponent} from './chracter-game-layout.component';

describe('DiceRollerComponent', () => {
  let component: CharacterGameLayoutComponent;
  let fixture: ComponentFixture<CharacterGameLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterGameLayoutComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterGameLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
