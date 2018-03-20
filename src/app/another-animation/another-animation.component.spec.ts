import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherAnimationComponent } from './another-animation.component';

describe('AnotherAnimationComponent', () => {
  let component: AnotherAnimationComponent;
  let fixture: ComponentFixture<AnotherAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
