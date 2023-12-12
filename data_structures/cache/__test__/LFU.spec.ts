import LFUCache from '../LFU';

describe('LFU', () => {
	it('should add a key-value pair to the cache', () => {
		const cache = new LFUCache<number, string>(5);

		cache.put(1, 'one');

		expect(cache.get(1)).toBe('one');
	});

	it('should retrieve a value from the cache using its key', () => {
		const cache = new LFUCache<number, string>(5);

		cache.put(1, 'one');
		const value = cache.get(1);

		expect(value).toBe('one');
	});

	it('should handle adding a key-value pair to a full cache', () => {
		const cache = new LFUCache<number, string>(2);

		cache.put(1, 'one');
		cache.put(2, 'two');
		cache.put(3, 'three');

		expect(cache.get(1)).toBeUndefined();
		expect(cache.get(2)).toBe('two');
		expect(cache.get(3)).toBe('three');
	});

	it('should remove the least recently used item when cache capacity is reached', () => {
		const cache = new LFUCache<number, string>(2);

		cache.put(1, 'one');
		cache.put(2, 'two');
		cache.get(1);
		cache.put(3, 'three');

		expect(cache.get(1)).toBe('one');
		expect(cache.get(2)).toBeUndefined();
		expect(cache.get(3)).toBe('three');
	});
});
