import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlackCardComponent } from './black-card.component';

describe('BlackCardComponent', () => {
  let component: BlackCardComponent;
  let fixture: ComponentFixture<BlackCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
