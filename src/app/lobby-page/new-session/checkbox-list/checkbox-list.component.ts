import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as _ from 'lodash';

@Component({
	selector: 'app-checkbox-list',
	templateUrl: './checkbox-list.component.html',
	styleUrls: ['./checkbox-list.component.scss'],
})
export class CheckboxListComponent implements OnInit {
	@Input() public data: string[] = [];
	@Output() private selectionChange = new EventEmitter<string[]>();

	private currentSelection: string[] = [];

	constructor() {}

	ngOnInit(): void {
		this.currentSelection = this.data;
	}

	public updateCurrentSelection(name: string): void {
		let currentSelection = this.currentSelection;

		if (!_.includes(currentSelection, name)) {
			currentSelection.push(name);
			// console.log('Could not find name, adding to the list', currentSelection);
		} else {
			let newList: string[] = [];
			currentSelection.forEach((v) => {
				if (v !== name) {
					newList.push(v);
				}
			});
			currentSelection = newList;
			// console.log('Name found, removing from the list', currentSelection);
		}

		this.currentSelection = currentSelection;
		this.selectionChange.emit(currentSelection);
	}

	public checkIfSelected(name: string): boolean {
		return _.includes(this.currentSelection, name);
	}
}
