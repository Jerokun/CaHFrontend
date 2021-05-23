import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LobbyViewService } from 'src/app/lobby-page/services/view/view.service';

export interface Lobby {
	id: string;
	players: Player[];
}

export interface Player {
	id: string;
	name: string;
}

export interface PostNewRoom {
	private: boolean;
	username: string;
	packSelection: string[];
}

@Injectable({
	providedIn: 'root',
})
export class SessionService {
	constructor(private http: HttpClient, private viewService: LobbyViewService) {}

	private _userName: string;
	private _roomCode: string = Math.random().toString(36).substr(2, 4);

	public placeholder: string = 'Your name';
	public players = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
	public scores = ['7', '5', '3', '2'];
	public packSelection: string[] = [];

	private controllerUrl = 'api/SessionController';

	addPlayer(newPlayer: string): void {
		if (newPlayer.length > 0) {
			this.userName = newPlayer;
		} else {
			this.userName = null;
		}

		this.viewService.setState('start', false);
		this.viewService.setState('room', false);
		this.viewService.toggleState('game');
	}

	createRoom(): void {
		switch (this.userName) {
			case null:
				this.buttonError('createRoom');
				break;
			case undefined:
				this.buttonError('createRoom');
				break;

			default:
				if (this.userName.length > 0) {
					this.postNewRoom({
						private: this.viewService.getState('private'),
						username: this.userName,
						packSelection: this.packSelection,
					});
					this.viewService.setState('room', true);
				} else {
					this.buttonError('createRoom');
				}
				break;
		}
	}

	buttonError(button: string): void {
		switch (button) {
			case 'createRoom':
				this.placeholder = 'Fill in name!';
				console.error('Please enter a name');
				break;

			case 'startGame':
				// ...
				break;

			default:
				console.error('No valid button has been found, but an error has occured');
				break;
		}
	}

	/* To copy Text from Textbox */
	copyInputMessage(inputElement): void {
		inputElement.select();
		document.execCommand('copy');
		inputElement.setSelectionRange(0, 0);
	}

	// getPackList(): string[] {
	// 	let fakeResponse: string[] = ['Pack 1', 'Pack 2', 'Pack 3', 'Pack 4', 'Pack 5'];
	// 	return fakeResponse;
  // }

  getPackList(): string[] {
    let fakeResponse: string[] = [
      'Base Deck',
      'First Expansion',
      'Second Expansion',
      'Third Expansion',
      'Fouth Expansion',
      'Fifth Expansion',
      'Sixth Expansion',
      'Green Box',
      "90's Nostalgia Pack",
      'Box',
      'Fantasy Pack',
      'Food Pack',
      'Science Pack',
      'World Wide Web Pack',
      'Vote for Hillary Pack',
      'Vote for Trump Pack',
      'Post-Trump Pack',
      '2012 Holiday Pack',
      '2013 Holiday Pack',
      'Pax East 2013 Pack',
      'Pax Prime 2013 Pack',
      'Pax East 2014 Pack',
      'Pax East 2014 Promo Pack',
      'Pax Prime 2014 Panel Cards',
      'Pax Prime 2015 Pack',
      'House of Cards Against Humanity',
      'Reject Pack',
      'Reject Pack 2',
      'Canadian Conversion Kit',
      'Misprinted Deck',
    ];
    return fakeResponse;
  }


	postNewRoom(data: PostNewRoom): Observable<any> {
		return this.http.post<any>(this.controllerUrl + '/getNewSession', { body: data });
	}

	getJoinSession(name: string, roomCode: string): Observable<any> {
		const params = new HttpParams().set('userName', name).set('roomCode', roomCode);

		return this.http.get<any>(this.controllerUrl + '/getNewSession', { params });
	}

	public get roomCode(): string {
		return this._roomCode;
	}

	public get userName(): string {
		return this._userName;
	}

	public set userName(v: string) {
		this._userName = v;
	}
}
