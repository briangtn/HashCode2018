import { Vector2 } from './Vector2';
import { Car } from './Car';
import * as fs from 'fs'
import * as readline from 'readline'

export class Trip {
	start: Vector2;
	end: Vector2;
	start_time: number;
	end_time: number;
	car: Car;

	constructor(start: Vector2, end: Vector2, start_time: number, end_time: number) {
		this.start = start;
		this.end = end;
		this.start_time = start_time;
		this.end_time = end_time;
		this.car = null;
	}
}