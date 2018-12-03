import P5 from 'p5';

export default class Paddle {
	/**
	 * @param {P5} sketch
	 * @param {boolean} right
	 * @memberof Paddle
	 */
	constructor(sketch, right) {
		this.right = right;

		this.offset = 20;
		this.speed = 1.0;

		this.width = 15;
		this.height = Math.min(100, sketch.height / 5);

		const y = Math.floor((sketch.height - this.height) / 2);
		let x = this.offset - (this.width / 2);
		if (right) x = sketch.width - x - this.offset;

		this.position = new P5.Vector(x, y);
	}

	/**
	 * @param {number} dir Direction to move, -1 to 1
	 * @param {number} height The height of the current sketch
	 * @memberof Paddle
	 */
	move(dir, height) {
		const nY = this.position.y + (dir * this.speed);
		if (nY <= 0 || nY >= height) return;
		this.position.y = nY;
	}

	/**
	 * @param {P5} sketch
	 * @memberof Paddle
	 */
	draw(sketch) {
		sketch.stroke(255, 255, 255);
		sketch.rect(this.position.x, this.position.y, this.width, this.height);
	}
}
