import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropbindComponent } from './propbind.component';

describe('PropbindComponent', () => {
  let component: PropbindComponent;
  let fixture: ComponentFixture<PropbindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropbindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropbindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
