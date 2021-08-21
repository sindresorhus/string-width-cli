import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['a古']);
	t.is(Number.parseInt(stdout, 10), 3);
});
