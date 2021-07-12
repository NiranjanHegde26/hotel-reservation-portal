import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeluxeRoomComponent } from './deluxe-room.component';

describe('DeluxeRoomComponent', () => {
  let component: DeluxeRoomComponent;
  let fixture: ComponentFixture<DeluxeRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeluxeRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeluxeRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
