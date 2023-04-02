import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExFor04Component } from './ex-for04.component';

describe('ExFor04Component', () => {
  let component: ExFor04Component;
  let fixture: ComponentFixture<ExFor04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExFor04Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExFor04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
