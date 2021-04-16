import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { SessionService } from '../services/game/session.service';
import { ViewService } from '../services/lobby/view.service';

@Component({
	selector: 'app-lobby-page',
	templateUrl: './lobby-page.component.html',
	styleUrls: ['./lobby-page.component.scss'],
})
export class LobbyPageComponent implements OnInit {
	isButtonGroupClasses: true;

	public currentView: Array<KeyValue<string, boolean>>;

	constructor(private sessionService: SessionService, public viewService: ViewService) {}

	ngOnInit(): void {
		this.viewService.viewStatesObservable.subscribe((e) => (this.currentView = e));
	}
}
