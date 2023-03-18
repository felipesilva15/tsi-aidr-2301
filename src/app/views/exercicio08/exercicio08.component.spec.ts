import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio08Component } from './exercicio08.component';

describe('Exercicio08Component', () => {
  let component: Exercicio08Component;
  let fixture: ComponentFixture<Exercicio08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercicio08Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercicio08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
