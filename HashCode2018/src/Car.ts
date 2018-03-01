import { Vector2 } from "./Vector2";
import { Trip } from "./Trip";

export class Car {
	position: Vector2;
	trips: Trip[];

	constructor() {
		this.position = new Vector2(0, 0);
		this.trips;
	}
}