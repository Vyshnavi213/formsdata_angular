import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatallcmpComponent } from './matallcmp.component';

describe('MatallcmpComponent', () => {
  let component: MatallcmpComponent;
  let fixture: ComponentFixture<MatallcmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatallcmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatallcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
