const test = require('ava');
const electrizePresetDefault = require('./');

test('it work!', t => {
	const result = electrizePresetDefault();
	t.is(result, 42);
});
