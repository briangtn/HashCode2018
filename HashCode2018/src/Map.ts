import { Car } from "./Car";
import { Vector2 } from "./Vector2";
import { Trip } from "./Trip";
import * as fs from 'fs';

export class Map {
	cars: Car[];
	trip: Trip[];
	sizes: Vector2;
	ridesCount: number;
	stepCount: number;
	bonusCount: number;

	constructor(carCounter: number, width: number, height: number, ridesCount: number, stepCount: number, bonusCount: number) {
		this.cars = [];
		for (let i: number = 0; i < carCounter; i++)
			this.cars[i] = new Car();
		this.sizes = new Vector2(width, height);
		this.ridesCount = ridesCount;
		this.stepCount = stepCount;
		this.bonusCount = bonusCount;
	}

	static init_map(map_name: string): Map {
		let map: Map;
		let lines = fs.readFileSync(map_name).toString().split('\n');
		let args = lines[0].split(' ');

		console.log(map_name);
		map = new Map(parseInt(args[2]), parseInt(args[1]), parseInt(args[0]), parseInt(args[3]), parseInt(args[5]), parseInt(args[4]));
		return (map);
	}
}