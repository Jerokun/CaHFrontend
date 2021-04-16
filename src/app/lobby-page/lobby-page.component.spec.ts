import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LobbyPageComponent } from './lobby.page';

describe('LobbyPageComponent', () => {
	let component: LobbyPageComponent;
	let fixture: ComponentFixture<LobbyPageComponent>;

	beforeEach(
		waitForAsync(() => {
			TestBed.configureTestingModule({
				declarations: [LobbyPageComponent],
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(LobbyPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
