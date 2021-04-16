import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/game/session.service';
import { ViewService } from 'src/app/services/lobby/view.service';

@Component({
	selector: 'app-room',
	templateUrl: './room.component.html',
	styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
	list: string[] = [];
	selected: string[];
	constructor(public viewService: ViewService, public sessionService: SessionService) {}

	ngOnInit(): void {
		this.list = this.sessionService.getPackList();
	}

	updateSelected(event: string[]): void {
		console.log('newSession page has received an update from checkbox-list', event);
		this.selected = event;
	}
}
