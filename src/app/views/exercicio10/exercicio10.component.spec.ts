import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio10Component } from './exercicio10.component';

describe('Exercicio10Component', () => {
  let component: Exercicio10Component;
  let fixture: ComponentFixture<Exercicio10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercicio10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercicio10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
