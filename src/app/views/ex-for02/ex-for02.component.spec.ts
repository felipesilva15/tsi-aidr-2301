import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExFor02Component } from './ex-for02.component';

describe('ExFor02Component', () => {
  let component: ExFor02Component;
  let fixture: ComponentFixture<ExFor02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExFor02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExFor02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
