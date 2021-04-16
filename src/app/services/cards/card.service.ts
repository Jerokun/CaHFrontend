import { Injectable, OnInit } from '@angular/core';
import { ICardCollection } from '../../game/components/cards/ICardCollection';
import { IDeck } from '../../game/components/cards/IDeck';
import { IBlackCard } from '../../game/components/cards/black-card/IBlackCard';
import * as _ from 'lodash';
import { DeckGeneratorService } from './deck-generator.service';

export enum CardTypes {
  blackCard = 'blackCard',
  whiteCard = 'whiteCard',
}

@Injectable({
  providedIn: 'root',
})
export class CardService {

  constructor(private deckGeneratorService: DeckGeneratorService) {
    this.deckGeneratorService.getBlackDeck();
    this.deckGeneratorService.getWhiteDeck();
  }

  whiteCards: string[];
  blackCards: IBlackCard[];
  hand: string[];
  blackCard: IBlackCard;

  getDecks(): void {
    this.whiteCards = this.deckGeneratorService.getWhiteDeck();
    console.log('this.whiteCards:', this.whiteCards);
    this.blackCards = this.deckGeneratorService.getBlackDeck();
    console.log('this.blackCards:', this.blackCards);
  }

  public drawRandomBlackCard(): IBlackCard {
    let card: IBlackCard;
    const min = 0;
    const max = this.blackCards.length;
    const randomNumber = _.round(Math.random() * (max - min) + min);
    console.log('randomNumber', randomNumber);
    return card = this.blackCards[randomNumber];
  }

  public newHand(): any {
    let whiteCards: string[] = [];

    while (whiteCards.length <= 9) {
      const randomNumber = _.round(Math.random() * (this.whiteCards.length));
      console.log('randomWhitecard: ', randomNumber);
      whiteCards = whiteCards.concat(this.whiteCards[randomNumber]);
    }
    console.log('whiteCards:', whiteCards);

    return whiteCards;
  }
}
