import { KeyValue } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { SessionService } from 'src/app/services/game/session.service';
import { ViewService } from 'src/app/services/lobby/view.service';

@Component({
	selector: 'app-lobby-menu',
	templateUrl: './lobby-menu.component.html',
	styleUrls: ['./lobby-menu.component.scss'],
})
export class LobbyMenuComponent implements OnInit {
  constructor(public viewService: ViewService, public sessionService: SessionService) { }

	ngOnInit(): void {}

	onRulesButtonClicked(): void {}
}
