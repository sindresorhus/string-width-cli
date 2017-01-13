import test from 'ava';
import execa from 'execa';

test(async t => {
	const {stdout} = await execa('./cli.js', ['a古']);
	t.is(parseInt(stdout, 10), 3);
});
