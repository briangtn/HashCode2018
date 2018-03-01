import { Vector2 } from './Vector2';

export class Trip {
	start: Vector2;
	end: Vector2;

	constructor(start: Vector2, end: Vector2) {
		this.start = start;
		this.end = end;
	}
}