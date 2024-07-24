import PriorityQueue from '../priority-queue/PriorityQueue';

describe('PriorityQueue', () => {
	it('should enqueue items with priorities', () => {
		const queue = new PriorityQueue();
		queue.enqueue('low priority', 1);
		queue.enqueue('high priority', 2);

		expect(queue.peek()).toBe('high priority');
	});

	it('should dequeue items based on priority', () => {
		const queue = new PriorityQueue();
		queue.enqueue('low priority', 1);
		queue.enqueue('high priority', 2);
		queue.enqueue('medium priority', 1.5);

		expect(queue.dequeue()).toBe('high priority');
		expect(queue.dequeue()).toBe('medium priority');
		expect(queue.dequeue()).toBe('low priority');
	});

	it('should check if the queue is empty', () => {
		const queue = new PriorityQueue();
		expect(queue.isEmpty()).toBe(true);

		queue.enqueue('item', 1);
		expect(queue.isEmpty()).toBe(false);
	});

	it('should peek the highest priority item', () => {
		const queue = new PriorityQueue();
		queue.enqueue('low priority', 1);
		queue.enqueue('high priority', 2);

		expect(queue.peek()).toBe('high priority');
		queue.dequeue();
		expect(queue.peek()).toBe('low priority');
	});
});
