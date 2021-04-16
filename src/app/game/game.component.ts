import { Component, OnInit, OnChanges } from '@angular/core';
import { ViewService } from '../lobby-page/services/view/view.service';
import { CardService } from '../_deprecated/cards/card.service';
import { IBlackCard } from './components/cards/black-card/IBlackCard';
import { SessionService } from './services/session/session.service';

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

