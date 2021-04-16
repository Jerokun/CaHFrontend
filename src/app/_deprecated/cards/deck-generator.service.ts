import { Injectable } from '@angular/core';
import { CardService } from './card.service';
import { IDeck } from '../../game/components/cards/IDeck';
import { IBlackCard } from '../../game/components/cards/black-card/IBlackCard';
import { CardDataService } from './card-data.service';

export interface WhiteCards {
	[id: number]: string[];
}
export interface BlackCards {
	[id: number]: IBlackCard;
}

export type Deck = Record<string, IDeck>;

@Injectable({
	providedIn: 'root',
})
export class DeckGeneratorService {
	blackDeck: IBlackCard[] = [];
	whiteDeck: string[] = [];

	constructor(private cardDataService: CardDataService) {}

	public getWhiteDeck(): any {
		const whiteCards: string[] = this.cardDataService.whiteCards;
		return whiteCards;
	}

	public getBlackDeck(): IBlackCard[] {
		const blackCards: IBlackCard[] = this.cardDataService.blackCards;
		return blackCards;
	}

	public setBlackDeck(): IBlackCard[] {
		return this.blackDeck;
	}

	public setWhiteDeck(): string[] {
		return this.whiteDeck;
	}

	buildBlackDeck(): void {}

	buildWhiteDeck(): void {}

	public getWhiteCards(indexNumbers: number[]): string[] {
		let deck: string[] = [];
		indexNumbers.forEach((e) => {
			deck = deck.concat(this.getWhiteCardByIndex(e));
		});
		return deck;
	}

	getWhiteCardByIndex(index: number): string {
		const whiteCard = this.cardDataService.whiteCards[index];
		return whiteCard;
	}
}
