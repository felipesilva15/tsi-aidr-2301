import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExFor03Component } from './ex-for03.component';

describe('ExFor03Component', () => {
  let component: ExFor03Component;
  let fixture: ComponentFixture<ExFor03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExFor03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExFor03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
