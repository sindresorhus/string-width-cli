#!/usr/bin/env node
'use strict';
var meow = require('meow');
var stringWidth = require('string-width');

var cli = meow({
	help: [
		'Usage',
		'  $ string-width <text>',
		'',
		'Example',
		'  $ string-width a古',
		'  3'
	]
}, {
	string: ['_']
});

console.log(stringWidth(cli.input[0]));
