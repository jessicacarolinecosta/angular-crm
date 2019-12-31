import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCirclesComponent } from './select-circles.component';

describe('SelectCirclesComponent', () => {
  let component: SelectCirclesComponent;
  let fixture: ComponentFixture<SelectCirclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCirclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCirclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
