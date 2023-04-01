import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExFor01Component } from './ex-for01.component';

describe('ExFor01Component', () => {
  let component: ExFor01Component;
  let fixture: ComponentFixture<ExFor01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExFor01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExFor01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
