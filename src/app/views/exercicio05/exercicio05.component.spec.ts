import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio05Component } from './exercicio05.component';

describe('Exercicio05Component', () => {
  let component: Exercicio05Component;
  let fixture: ComponentFixture<Exercicio05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercicio05Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercicio05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
