import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyMenuComponent } from './lobby-menu.component';

describe('LobbyMenuComponent', () => {
  let component: LobbyMenuComponent;
  let fixture: ComponentFixture<LobbyMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LobbyMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LobbyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
