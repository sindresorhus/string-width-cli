#!/usr/bin/env node
'use strict';
const meow = require('meow');
const stringWidth = require('string-width');

const cli = meow(`
	Usage
	  $ string-width <text>

	Example
	  $ string-width a古
	  3
`);

console.log(stringWidth(cli.input[0]));
