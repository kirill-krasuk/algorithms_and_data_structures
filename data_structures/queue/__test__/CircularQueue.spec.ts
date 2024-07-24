import CircularQueue from '../circular-queue/CircularQueue';

describe('CircularQueue', () => {
	let queue: CircularQueue<number>;

	beforeEach(() => {
		queue = new CircularQueue(3);
	});

	it('should initialize with given capacity', () => {
		expect(queue._capacity).toBe(3);
		expect(queue.isEmpty()).toBe(true);
		expect(queue.isFull()).toBe(false);
	});

	it('enqueue should add items until full and then return false', () => {
		expect(queue.enqueue(1)).toBe(true);
		expect(queue.enqueue(2)).toBe(true);
		expect(queue.enqueue(3)).toBe(true);

		expect(queue.isFull()).toBe(true);

		expect(queue.enqueue(4)).toBe(false);
	});

	it('dequeue should remove items and return true, false if empty', () => {
		queue.enqueue(1);
		queue.enqueue(2);

		expect(queue.dequeue()).toBe(true);
		expect(queue.dequeue()).toBe(true);
		expect(queue.dequeue()).toBe(false);
	});

	it('front and rear should return correct items', () => {
		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);

		expect(queue.front()).toBe(1);
		expect(queue.rear()).toBe(3);

		queue.dequeue();

		expect(queue.front()).toBe(2);
	});

	it('isEmpty and isFull should return correct status', () => {
		expect(queue.isEmpty()).toBe(true);

		queue.enqueue(1);

		expect(queue.isEmpty()).toBe(false);

		queue.enqueue(2);
		queue.enqueue(3);

		expect(queue.isFull()).toBe(true);
	});
});

describe('Internal implementation details', () => {
	let queue: CircularQueue<number>;

	beforeEach(() => {
		queue = new CircularQueue(3);
	});

	it('should correctly update positions after partial dequeue and enqueue', () => {
		queue.enqueue(1); // [1, undefined, undefined]
		queue.enqueue(2); // [1, 2, undefined]
		queue.enqueue(3); // [1, 2, 3]
		queue.dequeue(); // [undefined, 2, 3]
		queue.enqueue(4); // [4, 2, 3]

		// Проверяем внутреннее состояние очереди
		expect(queue._array).toEqual([4, 2, 3]);
		expect(queue.front()).toBe(2);
		expect(queue.rear()).toBe(4);
	});

	it('should correctly handle full cycle of enqueue and dequeue', () => {
		queue.enqueue(1); // [1, undefined, undefined]
		queue.enqueue(2); // [1, 2, undefined]
		queue.dequeue(); // [undefined, 2, undefined]
		queue.dequeue(); // [undefined, undefined, undefined]
		queue.enqueue(3); // [undefined, undefined, 3]
		queue.enqueue(4); // [4, undefined, 3]

		// Проверяем внутреннее состояние очереди
		expect(queue._array).toEqual([4, undefined, 3]);
		expect(queue.front()).toBe(3);
		expect(queue.rear()).toBe(4);
	});
});
