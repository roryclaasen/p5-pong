/* eslint-disable no-unused-vars */

import P5 from 'p5';
import Stats from 'stats-js';

const width = window.innerWidth;
const height = window.innerHeight;

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
		sketch.background(options.background);
		// TODO Render
		stats.end();
	};
}

document.getElementById('root').appendChild(stats.domElement);
const myp5 = new P5(renderer, document.getElementById('root'));
