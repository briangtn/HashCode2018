export class Vector2 {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	substract(vector: Vector2) {
		this.x -= vector.x;
		this.y -= vector.y;
	}

	add(vector: Vector2) {
		this.x += vector.x;
		this.y += vector.y;
	}
}