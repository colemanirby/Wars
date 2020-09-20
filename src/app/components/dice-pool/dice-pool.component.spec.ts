import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicePoolComponent } from './dice-pool.component';

describe('DicePoolComponent', () => {
  let component: DicePoolComponent;
  let fixture: ComponentFixture<DicePoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicePoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicePoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
