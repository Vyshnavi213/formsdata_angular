import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatselectallComponent } from './matselectall.component';

describe('MatselectallComponent', () => {
  let component: MatselectallComponent;
  let fixture: ComponentFixture<MatselectallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatselectallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatselectallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
