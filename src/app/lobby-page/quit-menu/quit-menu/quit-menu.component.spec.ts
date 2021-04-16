import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuitAndVerifyComponent } from './quit-menu.component';

describe('QuitMenuComponent', () => {
  let component: QuitAndVerifyComponent;
  let fixture: ComponentFixture<QuitAndVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuitAndVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuitAndVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
