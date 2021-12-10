import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottombuttonComponent } from './bottombutton.component';

describe('BottombuttonComponent', () => {
  let component: BottombuttonComponent;
  let fixture: ComponentFixture<BottombuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottombuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottombuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
