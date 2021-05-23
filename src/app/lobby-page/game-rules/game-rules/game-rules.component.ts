import { Component, OnInit } from '@angular/core';
import { LobbyViewService } from '../../services/view/view.service';

@Component({
  selector: 'app-game-rules',
  templateUrl: './game-rules.component.html',
  styleUrls: ['./game-rules.component.scss']
})
export class GameRulesComponent implements OnInit {

  constructor(public viewService: LobbyViewService) { }

  ngOnInit(): void {
  }

}
