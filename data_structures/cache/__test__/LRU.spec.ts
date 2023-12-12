import LRUCache from '../LRU';

describe('LRU', () => {
	it('should add key-value pair to the cache', () => {
		const cache = new LRUCache<number, string>(3);

		cache.put(1, 'one');
		cache.put(2, 'two');
		cache.put(3, 'three');

		expect(cache.get(1)).toBe('one');
		expect(cache.get(2)).toBe('two');
		expect(cache.get(3)).toBe('three');
	});

	it('should retrieve value from the cache using key', () => {
		const cache = new LRUCache<number, string>(3);
		cache.put(1, 'one');
		cache.put(2, 'two');
		cache.put(3, 'three');

		expect(cache.get(1)).toBe('one');
	});

	it('should update the cache order when retrieving a value', () => {
		const cache = new LRUCache<number, string>(3);
		cache.put(1, 'one');
		cache.put(2, 'two');
		cache.put(3, 'three');

		cache.get(1);
		cache.put(4, 'four');

		expect(cache.get(1)).toBe('one');
		expect(cache.get(2)).toBeUndefined();
		expect(cache.get(3)).toBe('three');
		expect(cache.get(4)).toBe('four');
	});

	it('should return undefined when retrieving a non-existent key', () => {
		const cache = new LRUCache<number, string>(3);

		cache.put(1, 'one');
		cache.put(2, 'two');
		cache.put(3, 'three');

		expect(cache.get(4)).toBeUndefined();
	});

	it('should not remove any item when adding a key-value pair to a full cache with an existing key', () => {
		const cache = new LRUCache<number, string>(3);

		cache.put(1, 'one');
		cache.put(2, 'two');
		cache.put(3, 'three');

		cache.put(2, 'new two');

		expect(cache.get(1)).toBe('one');
		expect(cache.get(2)).toBe('new two');
		expect(cache.get(3)).toBe('three');
	});

	it('should remove the least recently used item when adding a key-value pair to a full cache with a new key', () => {
		const cache = new LRUCache<number, string>(3);

		cache.put(1, 'one');
		cache.put(2, 'two');
		cache.put(3, 'three');

		cache.put(4, 'four');

		expect(cache.get(1)).toBeUndefined();
		expect(cache.get(2)).toBe('two');
		expect(cache.get(3)).toBe('three');
		expect(cache.get(4)).toBe('four');
	});
});
