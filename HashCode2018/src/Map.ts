import { Car } from "./Car";
import { Vector2 } from "./Vector2";

export class Map {
	cars: Car[];
	sizes: Vector2;
	ridesCount: number;
	stepCount: number;
	bonusCount: number;

	constructor(carCounter: number, width: number, height: number, ridesCount: number, stepCount: number, bonusCount: number) {
		for (let i: number = 0; i < carCounter; i++)
			this.cars[i] = new Car();
		this.sizes = new Vector2(width, height);
		this.ridesCount = ridesCount;
		this.stepCount = stepCount;
		this.bonusCount = bonusCount;
	}
}