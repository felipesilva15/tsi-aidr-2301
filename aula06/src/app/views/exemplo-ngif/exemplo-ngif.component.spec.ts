import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploNgifComponent } from './exemplo-ngif.component';

describe('ExemploNgifComponent', () => {
  let component: ExemploNgifComponent;
  let fixture: ComponentFixture<ExemploNgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploNgifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
