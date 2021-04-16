import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IWhiteCardStatus } from 'src/app/game/hand/hand.component';

@Component({
  selector: 'app-white-card',
  templateUrl: './white-card.component.html',
  styleUrls: ['./white-card.component.scss', '../../../game.component.scss'],
})
export class WhiteCardComponent implements OnInit {
  constructor() {}

  @Input() card: IWhiteCardStatus;
  @Output() statusUpdate = new EventEmitter<IWhiteCardStatus>();

  ngOnInit(): void {}

  select(): void {
    this.card.selected = true;
    this.statusUpdate.emit(this.card);
  }

  cancel(): void {
    this.card.selected = false;
    this.statusUpdate.emit(this.card);
  }

  confirm(): void {
    this.card.confirmed = true;
    this.statusUpdate.emit(this.card);
  }
}
