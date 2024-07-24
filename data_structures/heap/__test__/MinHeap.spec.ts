import MinHeap from '../min-heap/MinHeap';

describe('MinHeap', () => {
	it('should insert a single element', () => {
		const minHeap = new MinHeap();

		minHeap.insert(1);

		expect(minHeap.heap).toEqual([1]);
		expect(minHeap.extract()).toBe(1);
	});

	it('should insert multiple elements', () => {
		const minHeap = new MinHeap();

		minHeap.insert(1);
		minHeap.insert(2);
		minHeap.insert(3);

		expect(minHeap.heap).toEqual([1, 2, 3]);
		expect(minHeap.extract()).toBe(1);
		expect(minHeap.extract()).toBe(2);
		expect(minHeap.extract()).toBe(3);
	});

	it('should extract the minimum element', () => {
		const minHeap = new MinHeap();

		minHeap.insert(3);
		minHeap.insert(2);
		minHeap.insert(1);

		expect(minHeap.heap).toEqual([1, 3, 2]);
		expect(minHeap.extract()).toBe(1);
		expect(minHeap.extract()).toBe(2);
		expect(minHeap.extract()).toBe(3);
	});

	it('should extract the minimum element after removing elements', () => {
		const minHeap = new MinHeap();

		minHeap.insert(3);
		minHeap.insert(2);
		minHeap.insert(1);

		expect(minHeap.heap).toEqual([1, 3, 2]);
		expect(minHeap.extract()).toBe(1);

		minHeap.insert(0);

		expect(minHeap.heap).toEqual([0, 3, 2]);
		expect(minHeap.extract()).toBe(0);
		expect(minHeap.extract()).toBe(2);
		expect(minHeap.extract()).toBe(3);
	});

	it('should delete an element', () => {
		const minHeap = new MinHeap();

		minHeap.heap = [5, 7, 27, 8, 28, 69, 50, 55, 35, 79, 98, 55, 40, 71, 99, 81, 27];
		minHeap.delete(2);

		expect(minHeap.heap).toEqual([
			5, 7, 27, 8, 28, 69, 50, 55, 35, 79, 98, 55, 40, 71, 99, 81,
		]);
	});

	it('should insert and extract objects based on a key', () => {
		const minHeap = new MinHeap<{ id: number; value: string }>((obj) => obj.id);

		minHeap.insert({ id: 2, value: 'B' });
		minHeap.insert({ id: 1, value: 'A' });
		minHeap.insert({ id: 3, value: 'C' });

		expect(minHeap.extract()).toEqual({ id: 1, value: 'A' });
		expect(minHeap.extract()).toEqual({ id: 2, value: 'B' });
		expect(minHeap.extract()).toEqual({ id: 3, value: 'C' });
	});
});
