import LinkedList from '../../list/linked-list/LinkedList';
import Queue from '../queue/Queue';

describe('Queue', () => {
	let q: Queue<number>;

	beforeEach(() => {
		q = Queue.from([1, 2]);
	});

	it('should work fine with array constructor', () => {
		const queue = Queue.from([1, 2, 3]);
		expect(queue.toArray()).toEqual([1, 2, 3]);
	});

	it('should work fine with linked list constructor', () => {
		const linkedList = LinkedList.from([1, 2, 3]);
		const queue = Queue.from(linkedList);
		expect(queue.toArray()).toEqual([1, 2, 3]);
	});

	it('should be empty', () => {
		const queue = new Queue();

		expect(queue.peek()).toBe(null);
		expect(queue.isEmpty()).toBeTruthy();
		expect(queue.dequeue()).toBe(null);
		expect(queue.toArray()).toEqual([]);
	});

	it('should not be empty', () => {
		expect(q.isEmpty()).toBeFalsy();
	});

	it('should add value to end of queue', () => {
		q.enqueue(10);
		q.enqueue(20);
		q.enqueue(30);

		expect(q.toArray()).toEqual([1, 2, 10, 20, 30]);
	});

	it('should remove value from start', () => {
		const queue = Queue.from([1, 2, 3]);

		expect(queue.dequeue()).toBe(1);
		expect(queue.toArray()).toEqual([2, 3]);
	});

	it('should return first value in queue', () => {
		expect(q.peek()).toEqual(1);
	});

	it('should correct convert to string', () => {
		expect(q.toString()).toEqual('1,2');
	});
});
