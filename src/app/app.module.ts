import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LobbyPageComponent } from './lobby-page/lobby.component';
import { BlackCardComponent } from './game/components/cards/black-card/black-card.component';
import { WhiteCardComponent } from './game/components/cards/white-card/white-card.component';
import { GameComponent } from './game/game.component';
import { HandComponent } from './game/hand/hand.component';
import { CardService } from './_deprecated/cards/card.service';
import { CardDataService } from './_deprecated/cards/card-data.service';
import { ChatboxComponent } from './shared/chat/chatbox/chatbox.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { LobbyMenuComponent } from './lobby-page/lobby-menu/lobby-menu.component';
import { GameRulesComponent } from './lobby-page/game-rules/game-rules/game-rules.component';
import { JoinSessionComponent } from './lobby-page/join-session/join-session/join-session.component';
import { NewSessionComponent } from './lobby-page/new-session/new-session.component';
import { RoomComponent } from './lobby-page/room/room/room.component';
import { InGameMenuComponent } from './lobby-page/in-game-menu/in-game-menu/in-game-menu.component';
import { QuitAndVerifyComponent } from './lobby-page/quit-menu/quit-menu/quit-menu.component';
import { CheckboxListComponent } from './lobby-page/new-session/checkbox-list/checkbox-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SessionService } from './game/services/session/session.service';
import { ViewService } from './lobby-page/services/view/view.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
	declarations: [
		AppComponent,
		BlackCardComponent,
		LobbyPageComponent,
		WhiteCardComponent,
		GameComponent,
		HandComponent,
		ChatboxComponent,
		LobbyMenuComponent,
		GameRulesComponent,
		JoinSessionComponent,
		NewSessionComponent,
		RoomComponent,
		InGameMenuComponent,
		QuitAndVerifyComponent,
		CheckboxListComponent,
	],
	imports: [CommonModule, BrowserModule, AppRoutingModule, FormsModule, FontAwesomeModule, HttpClientModule, BrowserAnimationsModule, ToastrModule.forRoot(),],
	providers: [CardService, CardDataService, SessionService, ViewService, ToastrService],
	bootstrap: [AppComponent],
})
export class AppModule {}
