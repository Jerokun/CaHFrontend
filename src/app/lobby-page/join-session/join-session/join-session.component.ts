import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/game/services/session/session.service';
import { LobbyViewService } from '../../services/view/view.service';

@Component({
  selector: 'app-join-session',
  templateUrl: './join-session.component.html',
  styleUrls: ['./join-session.component.scss']
})
export class JoinSessionComponent implements OnInit {

  constructor(public viewService: LobbyViewService, public sessionService: SessionService) { }

  ngOnInit(): void {
  }

}
