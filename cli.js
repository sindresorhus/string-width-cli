#!/usr/bin/env node
import meow from 'meow';
import stringWidth from 'string-width';

const cli = meow(`
	Usage
	  $ string-width <text>

	Example
	  $ string-width a古
	  3
`, {
	importMeta: import.meta,
});

console.log(stringWidth(cli.input[0]));
