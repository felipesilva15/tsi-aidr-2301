import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex05Component } from './ex05.component';

describe('Ex05Component', () => {
  let component: Ex05Component;
  let fixture: ComponentFixture<Ex05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex05Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
