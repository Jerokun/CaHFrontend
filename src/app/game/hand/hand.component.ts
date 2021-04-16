import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { SessionService } from 'src/app/services/game/session.service';
import { ViewService } from 'src/app/services/lobby/view.service';

export interface IWhiteCardStatus {
  text: string;
  confirmed: boolean;
  selected: boolean;
  disabled?: boolean;
}

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss'],
})
export class HandComponent implements OnInit, OnChanges {
  // TODO: The user needs to see know how many (remaining) cards he needs to pick.
  @Input() maxPicks: number;
  @Input() cards: string[];
  @Output() sendChosenCards = new EventEmitter<string[]>();

  chosenCards: string[] = [];
  whiteCards: IWhiteCardStatus[] = [];

  constructor(public viewService: ViewService, public sessionService: SessionService) { }

  hand = true;

  ngOnInit(): void {
    console.log('handCards', this.cards);
    let whiteCards: IWhiteCardStatus[] = [];
    this.cards.forEach((card) => {
      whiteCards = whiteCards.concat(this.createIWhiteCardStatus(card));
    });
    this.whiteCards = whiteCards;
  }

  ngOnChanges(): void {}

  createIWhiteCardStatus(card: string): IWhiteCardStatus {
    const newCard: IWhiteCardStatus = {
      text: card,
      disabled: false,
      confirmed: false,
      selected: false,
    };
    return newCard;
  }

  commitCards(event: IWhiteCardStatus): void {
    if (event.confirmed) {
      if (this.chosenCards.length < this.maxPicks) {
        this.chosenCards = this.chosenCards.concat(event.text);
        console.log('cardCommit()', this.chosenCards);
      }

      if (this.chosenCards.length >= this.maxPicks) {
        console.log('Max card(s) selected. Max picks = ', this.maxPicks);
        console.log('Current cards committed: ', this.chosenCards);

        this.whiteCards.forEach((card) => {
          card.disabled = true;
        });
      }
    }
  }
}
