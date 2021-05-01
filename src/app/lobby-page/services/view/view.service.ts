import { KeyValue } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ViewService {
	private readonly viewStates: Array<KeyValue<string, boolean>> = [
		{ key: 'start', value: false },
		{ key: 'game', value: false },
		{ key: 'rules', value: false },
		{ key: 'start', value: false },
		{ key: 'join', value: false },
		{ key: 'room', value: false },
		{ key: 'sure', value: false },
		{ key: 'isprivate', value: true },
		{ key: 'menu', value: false },
		{ key: 'pmenu', value: false },
		{ key: 'hand', value: false },
		{ key: 'istogglehand', value: false },
		{ key: 'togglemodehand', value: false },
		{ key: 'close', value: false },
		{ key: 'chat', value: false },
		{ key: 'voice', value: false },
	];

	private viewStatesSubject = new BehaviorSubject<Array<KeyValue<string, boolean>>>(this.viewStates);

	public viewStatesObservable = this.viewStatesSubject.asObservable();

	constructor() {}

	public setState(key: string, value: boolean): void {
		// console.log('before setState', this.viewStatesSubject.getValue());
		const newStates = this.getStates().map((k) => (k.key !== key ? k : { ...k, value }));
		this.viewStatesSubject.next(newStates);
		// console.log('after setState', this.viewStatesSubject.getValue());
	}

	public resetStates(): void {
		this.viewStatesSubject.next(this.viewStates);
	}

	public getState(s: string): boolean {
		const states = this.getStates();
		// console.log('getState ' + s, states.find(state => state.key === s).value);
		try {
			return states.find((state) => state.key === s).value;
		} catch (e) {
			console.error(e);
			console.log('getState value provided', s);
		}
	}

	public getStates(): Array<KeyValue<string, boolean>> {
		// console.log('getStates', this.viewStatesSubject.getValue());
		return this.viewStatesSubject.getValue();
	}

	public toggleState(key: string): void {
		return this.setState(key, !this.getState(key));
	}
}
