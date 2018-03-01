import { Vector2 } from "./Vector2";
import { Trip } from "./Trip";

export class Car {
	position: Vector2;
	trip: Trip;
	bInTrip: Boolean;

	constructor() {
		this.position = new Vector2(0, 0);
		this.bInTrip = false;
	}

	navigate() {
		if (this.bInTrip == false) {
			if (this.position.x < this.trip.start.x) {
				this.position.x += 1;
			} else if ((this.trip.start.x < this.position.x)) {
				this.position.x -= 1;
			} else if (this.position.y < this.trip.start.y) {
				this.position.y += 1;
			} else if ((this.trip.start.y < this.position.y)) {
				this.position.y -= 1;
			}
		} else {
			if (this.position.x < this.trip.end.x) {
				this.position.x += 1;
			} else if ((this.trip.end.x < this.position.x)) {
				this.position.x -= 1;
			} else if (this.position.y < this.trip.end.y) {
				this.position.y += 1;
			} else if ((this.trip.end.y < this.position.y)) {
				this.position.y -= 1;
			}
		}
		if (this.bInTrip && this.position == this.trip.end) {
			this.trip.completed = true;
			this.trip = null;
			this.bInTrip = false;
		}
	}
}