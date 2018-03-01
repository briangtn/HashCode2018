import { Vector2 } from './Vector2';
import { Car } from './Car';

export class Trip {
	start: Vector2;
	end: Vector2;
	start_time: number;
	end_time: number;
	car: Car;
	completed: Boolean;

	constructor(start: Vector2, end: Vector2) {
		this.start = start;
		this.end = end;
		this.car = null;
		this.completed = false;
	}
}