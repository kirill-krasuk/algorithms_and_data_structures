import MaxHeap from '../max-heap/MaxHeap';

describe('MaxHeap', () => {
	it('should insert a single element', () => {
		const maxHeap = new MaxHeap();

		maxHeap.insert(1);

		expect(maxHeap.heap).toEqual([1]);
		expect(maxHeap.extract()).toBe(1);
	});

	it('should insert multiple elements', () => {
		const maxHeap = new MaxHeap();

		maxHeap.insert(1);
		maxHeap.insert(2);
		maxHeap.insert(3);

		expect(maxHeap.heap).toEqual([3, 1, 2]);
		expect(maxHeap.extract()).toBe(3);
		expect(maxHeap.extract()).toBe(2);
		expect(maxHeap.extract()).toBe(1);
	});

	it('should extract the maximum element', () => {
		const maxHeap = new MaxHeap();

		maxHeap.insert(1);
		maxHeap.insert(2);
		maxHeap.insert(3);

		expect(maxHeap.heap).toEqual([3, 1, 2]);
		expect(maxHeap.extract()).toBe(3);
		expect(maxHeap.extract()).toBe(2);
		expect(maxHeap.extract()).toBe(1);
	});

	it('should extract the maximum element after removing elements', () => {
		const maxHeap = new MaxHeap();

		maxHeap.insert(1);
		maxHeap.insert(2);
		maxHeap.insert(3);

		expect(maxHeap.heap).toEqual([3, 1, 2]);
		expect(maxHeap.extract()).toBe(3);

		maxHeap.insert(4);

		expect(maxHeap.heap).toEqual([4, 1, 2]);
		expect(maxHeap.extract()).toBe(4);
		expect(maxHeap.extract()).toBe(2);
		expect(maxHeap.extract()).toBe(1);
	});

	it('should delete an element', () => {
		const maxHeap = new MaxHeap();

		maxHeap.heap = [99, 98, 71, 81, 79, 69, 27, 55, 8, 35, 7, 55, 40, 27, 5, 28, 50];

		maxHeap.delete(4);

		expect(maxHeap.heap).toEqual([
			99, 98, 71, 81, 50, 69, 27, 55, 8, 35, 7, 55, 40, 27, 5, 28,
		]);
	});

	it('should insert and extract objects based on a key', () => {
		const minHeap = new MaxHeap<{ id: number; value: string }>((obj) => obj.id);

		minHeap.insert({ id: 2, value: 'B' });
		minHeap.insert({ id: 3, value: 'A' });
		minHeap.insert({ id: 1, value: 'C' });

		expect(minHeap.extract()).toEqual({ id: 3, value: 'A' });
		expect(minHeap.extract()).toEqual({ id: 2, value: 'B' });
		expect(minHeap.extract()).toEqual({ id: 1, value: 'C' });
	});
});
