import test from 'ava';

import {any} from '#module';

test('any', (t) => {
	const x = (object, value) => t.deepEqual(any(object), value);

	x([], false);
	x([true], true);
	x([false], false);

	x([true, true, true, true], true);
	x([false, false, false, false], false);

	x([false, true, true, true], true);
	x([true, false, true, true], true);
	x([true, true, false, true], true);
	x([true, true, true, false], true);

	x([true, false, false, false], true);
	x([false, true, false, false], true);
	x([false, false, true, false], true);
	x([false, false, false, true], true);
});
