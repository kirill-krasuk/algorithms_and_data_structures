/* eslint-disable camelcase */
/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
function murmurHash3_x86_32(key: number[], seed = 0) {
	let h1 = seed;
	for (let i = 0; i < key.length - 3; i += 4) {
		let k1 = key[i] | (key[i + 1] << 8) | (key[i + 2] << 16) | (key[i + 3] << 24);
		k1 = imul(k1, 3432918353);
		k1 = (k1 << 15) | (k1 >>> 17);
		k1 = imul(k1, 461845907);
		h1 ^= k1;
		h1 = (h1 << 13) | (h1 >>> 19);
		h1 = imul(h1, 5) + 3864292196;
	}
	let k1 = 0;
	switch (key.length & 3) {
	case 3:
		k1 ^= key[key.length - 3] << 16;
	case 2:
		k1 ^= key[key.length - 2] << 8;
	case 1:
		k1 ^= key[key.length - 1];
		k1 = imul(k1, 3432918353);
		k1 = (k1 << 15) | (k1 >>> 17);
		k1 = imul(k1, 461845907);
		h1 ^= k1;
	}
	h1 ^= key.length;
	h1 ^= h1 >>> 16;
	h1 = imul(h1, 2246822507);
	h1 ^= h1 >>> 13;
	h1 = imul(h1, 3266489909);
	h1 ^= h1 >>> 16;
	return h1 >>> 0;
}

function imul(a: number, b: number): number {
	const ah = (a >>> 16) & 0xffff;
	const al = a & 0xffff;
	const bh = (b >>> 16) & 0xffff;
	const bl = b & 0xffff;
	return (al * bl + (((ah * bl + al * bh) << 16) >>> 0)) | 0;
}

export default murmurHash3_x86_32;
