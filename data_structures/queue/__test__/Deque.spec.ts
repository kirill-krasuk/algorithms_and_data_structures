import Deque from '../deque/Deque';

describe('Deque', () => {
	let deque: Deque<number>;

	beforeEach(() => {
		deque = new Deque<number>();
	});

	it('is initially empty', () => {
		expect(deque.isEmpty()).toBe(true);
	});

	it('enqueueFront adds an element to the front', () => {
		deque.enqueueFront(1);

		expect(deque.peekFront()).toBe(1);
		expect(deque.isEmpty()).toBe(false);
	});

	it('enqueueBack adds an element to the back', () => {
		deque.enqueueBack(2);

		expect(deque.peekBack()).toBe(2);
	});

	it('dequeueFront removes and returns the front element', () => {
		deque.enqueueFront(1);
		deque.enqueueBack(2);

		expect(deque.dequeueFront()).toBe(1);
		expect(deque.peekFront()).toBe(2);
	});

	it('dequeueBack removes and returns the back element', () => {
		deque.enqueueFront(1);
		deque.enqueueBack(2);

		expect(deque.dequeueBack()).toBe(2);
		expect(deque.peekBack()).toBe(1);
	});

	it('peekFront and peekBack return the correct elements', () => {
		deque.enqueueFront(1);
		deque.enqueueBack(2);

		expect(deque.peekFront()).toBe(1);
		expect(deque.peekBack()).toBe(2);
	});

	it('toArray returns an array of elements', () => {
		deque.enqueueFront(1);
		deque.enqueueBack(2);

		expect(deque.toArray()).toEqual([1, 2]);
	});

	it('toString returns a string representation', () => {
		deque.enqueueFront(1);
		deque.enqueueBack(2);

		expect(deque.toString()).toBe('1,2');
	});
});
