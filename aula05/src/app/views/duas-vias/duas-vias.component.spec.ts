import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuasViasComponent } from './duas-vias.component';

describe('DuasViasComponent', () => {
  let component: DuasViasComponent;
  let fixture: ComponentFixture<DuasViasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuasViasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuasViasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
