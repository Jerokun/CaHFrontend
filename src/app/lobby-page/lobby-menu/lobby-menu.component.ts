import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/game/services/session/session.service';
import { LobbyViewService } from '../services/view/view.service';

@Component({
	selector: 'app-lobby-menu',
	templateUrl: './lobby-menu.component.html',
	styleUrls: ['./lobby-menu.component.scss'],
})
export class LobbyMenuComponent implements OnInit {
  constructor(public viewService: LobbyViewService, public sessionService: SessionService) { }

	ngOnInit(): void {}

	onRulesButtonClicked(): void {}
}
