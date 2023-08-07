/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import util from 'util';

export default function inspect(obj: any) {
	console.log('\n', util.inspect(obj, false, null, true /* enable colors */));
}
