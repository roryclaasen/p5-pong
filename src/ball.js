import P5 from 'p5';

export default class Ball {
	/**
	 *Creates an instance of Ball.
	 * @param {P5} sketch
	 * @memberof Ball
	 */
	constructor(sketch) {
		this.radius = 15;

		const x = (sketch.width - this.radius) / 2;
		const y = (sketch.height - this.radius) / 2;

		this.position = new P5.Vector(x, y);
	}

	/**
	 * @param {P5} sketch
	 * @memberof Ball
	 */
	draw(sketch) {
		sketch.stroke(255, 255, 255);
		sketch.rect(this.position.x, this.position.y, this.radius, this.radius);
	}
}
