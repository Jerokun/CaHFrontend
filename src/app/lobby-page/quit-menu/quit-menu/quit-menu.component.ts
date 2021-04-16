import { Component, Input, OnInit } from '@angular/core';
import { ViewService } from '../../services/view/view.service';

@Component({
	selector: 'app-quit-menu',
	templateUrl: './quit-menu.component.html',
	styleUrls: ['./quit-menu.component.scss'],
})
export class QuitAndVerifyComponent implements OnInit {
	@Input() promptText = 'You can always re-join the game using the room code.';
	@Input() promptTitle = 'Are you sure?';
	@Input() buttonTextVerify = 'Quit';
	@Input() buttonTextCancel = 'Stay';

	constructor(public viewService: ViewService) {}

	ngOnInit(): void {}

	quitMenu(): void {
		this.viewService.setState('menu', false);
		this.viewService.setState('pmenu', false);
		this.viewService.setState('game', false);
	}
}
