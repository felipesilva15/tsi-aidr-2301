import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio09Component } from './exercicio09.component';

describe('Exercicio09Component', () => {
  let component: Exercicio09Component;
  let fixture: ComponentFixture<Exercicio09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercicio09Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercicio09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
