import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractiseanimationComponent } from './practiseanimation.component';

describe('PractiseanimationComponent', () => {
  let component: PractiseanimationComponent;
  let fixture: ComponentFixture<PractiseanimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractiseanimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractiseanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
