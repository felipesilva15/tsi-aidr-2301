import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploNgforComponent } from './exemplo-ngfor.component';

describe('ExemploNgforComponent', () => {
  let component: ExemploNgforComponent;
  let fixture: ComponentFixture<ExemploNgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploNgforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
