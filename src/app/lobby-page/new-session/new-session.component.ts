import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/app/game/services/session/session.service';
import { LobbyViewService } from '../services/view/view.service';

@Component({
	selector: 'app-new-session',
	templateUrl: './new-session.component.html',
	styleUrls: ['./new-session.component.scss'],
})
export class NewSessionComponent implements OnInit {
	list: string[] = [];
	selected: string[];

	constructor(public viewService: LobbyViewService, public sessionService: SessionService) {}

	ngOnInit(): void {
		this.list = this.sessionService.getPackList();
	}

	updateSelected(event: string[]): void {
		this.selected = event;
	}
}
