/* eslint-disable no-unused-vars */

import P5 from 'p5';
import Stats from 'stats-js';

function lenToNum(par1) {
	return Number(par1.replace('px', ''));
}

document.addEventListener('DOMContentLoaded', () => {
	const style = window.getComputedStyle(document.getElementById('gameContainer'), null);

	const width = lenToNum(style.width) - (lenToNum(style.paddingLeft) + lenToNum(style.paddingRight));
	const height = lenToNum(style.height) - (lenToNum(style.paddingTop) + lenToNum(style.paddingBottom));

	const background = '#000';

	const stats = new Stats();
	stats.setMode(0);

	/**
	 * Wrapper function for sketch
	 * (also provides JS intellisense in Visual Studio Code)
	 * @param {P5} sketch
	 */
	function renderer(sketch) {
		sketch.setup = () => {
			sketch.createCanvas(width, height);
		};

		sketch.draw = () => {
			stats.begin();
			sketch.background(background);
			// TODO Render
			stats.end();
		};
	}

	document.body.appendChild(stats.domElement);
	const myp5 = new P5(renderer, document.getElementById('root'));
}, false);
