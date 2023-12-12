import MFUCache from '../MFU';

describe('MFU', () => {
	it('should put and get values successfully when cache is not full', () => {
		const cache = new MFUCache<number, string>(3);

		cache.put(1, 'one');
		cache.put(2, 'two');
		cache.put(3, 'three');

		expect(cache.get(1)).toBe('one');
		expect(cache.get(2)).toBe('two');
		expect(cache.get(3)).toBe('three');
	});

	it('should remove the least frequently used key when reaching capacity', () => {
		const cache = new MFUCache<number, string>(3);

		cache.put(1, 'one');
		cache.put(2, 'two');
		cache.put(3, 'three');
		cache.get(1);
		cache.get(2);
		cache.get(2);
		cache.put(4, 'four');

		expect(cache.get(1)).toBe('one');
		expect(cache.get(2)).toBeUndefined();
		expect(cache.get(3)).toBe('three');
		expect(cache.get(4)).toBe('four');
	});
});
