import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/game/services/session/session.service';
import { LobbyViewService } from '../../services/view/view.service';

@Component({
	selector: 'app-in-game-menu',
	templateUrl: './in-game-menu.component.html',
	styleUrls: ['./in-game-menu.component.scss'],
})
export class InGameMenuComponent implements OnInit {
	constructor(public viewService: LobbyViewService, public sessionService: SessionService) {}

	ngOnInit(): void {}
}
