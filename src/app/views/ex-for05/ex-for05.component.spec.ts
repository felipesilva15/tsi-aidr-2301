import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExFor05Component } from './ex-for05.component';

describe('ExFor05Component', () => {
  let component: ExFor05Component;
  let fixture: ComponentFixture<ExFor05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExFor05Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExFor05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
