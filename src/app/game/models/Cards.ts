export interface HistoryCards {
  blackCards: { [key: number]: BlackCard };
  whiteCards: { [key: number]: WhiteCard };
}

export interface BlackCard {
  pick: number;
  text: string;
}

export interface WhiteCard {
  text: string;
}

export interface Cards {
  blackCards: BlackCard[];
  whiteCards: WhiteCard[];
  historyCards: HistoryCards;
}
