import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantIndexComponent } from './restaurant-index.component';

describe('RestaurantIndexComponent', () => {
  let component: RestaurantIndexComponent;
  let fixture: ComponentFixture<RestaurantIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
