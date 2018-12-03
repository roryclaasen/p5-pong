// import P5 from 'p5';

import Paddle from './paddle';
import Ball from './ball';

export default class Game {
	/**
	 * Creates an instance of Game.
	 * @param {P5} sketch
	 * @memberof Game
	 */
	constructor(sketch) {
		this.left = new Paddle(sketch, false);
		this.right = new Paddle(sketch, true);

		this.ball = new Ball(sketch);
	}

	/**
	 * @param {P5} sketch
	 * @memberof Game
	 */
	draw(sketch) {
		this.left.draw(sketch);
		sketch.stroke(255, 255, 255, 150);
		sketch.strokeWeight(2);
		sketch.line(sketch.width / 2, 0, sketch.width / 2, sketch.height);
		this.right.draw(sketch);

		this.ball.draw(sketch);
	}
}
