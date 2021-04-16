import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/game/session.service';
import { ViewService } from 'src/app/services/lobby/view.service';

@Component({
	selector: 'app-in-game-menu',
	templateUrl: './in-game-menu.component.html',
	styleUrls: ['./in-game-menu.component.scss'],
})
export class InGameMenuComponent implements OnInit {
	constructor(public viewService: ViewService, public sessionService: SessionService) {}

	ngOnInit(): void {}
}
