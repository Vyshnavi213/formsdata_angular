import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatcmpComponent } from './matcmp.component';

describe('MatcmpComponent', () => {
  let component: MatcmpComponent;
  let fixture: ComponentFixture<MatcmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatcmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
