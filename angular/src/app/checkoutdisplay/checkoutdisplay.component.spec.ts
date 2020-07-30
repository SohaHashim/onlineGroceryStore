import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutdisplayComponent } from './checkoutdisplay.component';

describe('CheckoutdisplayComponent', () => {
  let component: CheckoutdisplayComponent;
  let fixture: ComponentFixture<CheckoutdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
