import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopitemsComponent } from './shopitems.component';

describe('ShopitemsComponent', () => {
  let component: ShopitemsComponent;
  let fixture: ComponentFixture<ShopitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
