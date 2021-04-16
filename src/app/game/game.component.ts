import { Component, OnInit, OnChanges } from '@angular/core';
import { CardService } from '../services/cards/card.service';
import { SessionService } from '../services/game/session.service';
import { ViewService } from '../services/lobby/view.service';
import { IBlackCard } from './components/cards/black-card/IBlackCard';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [CardService],
})
export class GameComponent implements OnInit, OnChanges {
  constructor(private cardService: CardService, public viewService: ViewService, public sessionService: SessionService) {}

  stackcards = false;

  public blackCard: IBlackCard;
  public whiteCards: string[] = [];

  ngOnChanges(): void {
    console.log('changes', this.whiteCards);
  }

  ngOnInit(): void {
    this.cardService.getDecks();
    this.blackCard = this.cardService.drawRandomBlackCard();
    this.whiteCards = this.cardService.newHand();
    console.log('this.blackCard:', this.blackCard);
    console.log('this.whiteCards:', this.whiteCards);
  }

  submitCards(event: any): void {
    console.log('submitCards()', event);

    if (event.length === this.blackCard.pick) {
      console.log('SUCCESS! You sent in the right amount of cards');
    } else { console.error('OOOPS! You sent in the wrong number of cards'); }
  }
}

