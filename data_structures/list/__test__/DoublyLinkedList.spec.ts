/* eslint-disable no-restricted-syntax */
import LinkedList from '../doubly-linked-list/DoublyLinkedList';

let linkedList: LinkedList<number>;

describe('DoublyLinkedList', () => {
	beforeEach(() => {
		linkedList = LinkedList.from([1, 2, 3]);
	});

	it('should set node links to null when adding one item', () => {
		const lList = new LinkedList<number>();

		lList.append(1);

		expect(lList.head?.next).toBeNull();
		expect(lList.head?.prev).toBeNull();

		expect(lList.tail?.next).toBeNull();
		expect(lList.tail?.prev).toBeNull();

		expect(lList.head?.value).toBe(1);
		expect(lList.tail?.value).toBe(1);

		expect(lList.count()).toBe(1);
	});

	it('should link nodes correctly', () => {
		const lList = new LinkedList<number>();

		lList.append(1).append(2).append(3);

		expect(lList.head?.next?.next).toBe(lList.tail);
		expect(lList.head?.prev).toBeNull();

		expect(lList.tail?.next).toBeNull();
		expect(lList.tail?.prev?.prev).toBe(lList.head);

		expect(lList.head?.value).toBe(1);
		expect(lList.head?.next?.value).toBe(2);
		expect(lList.tail?.prev?.value).toBe(2);
		expect(lList.tail?.value).toBe(3);

		expect(lList.count()).toBe(3);
	});

	it('should prepend a value into an empty list', () => {
		const lList = new LinkedList<number>();

		lList.prepend(1);

		expect(lList.head?.next).toBeNull();
		expect(lList.head?.prev).toBeNull();

		expect(lList.tail?.next).toBeNull();
		expect(lList.tail?.prev).toBeNull();

		expect(lList.head?.value).toBe(1);
		expect(lList.tail?.value).toBe(1);

		expect(lList.count()).toBe(1);
	});

	it('should prepend values to an empty list', () => {
		const lList = new LinkedList<number>();

		lList.prepend(1).prepend(2).prepend(3);

		expect(lList.head?.next?.next).toBe(lList.tail);
		expect(lList.head?.prev).toBeNull();

		expect(lList.tail?.next).toBeNull();
		expect(lList.tail?.prev?.prev).toBe(lList.head);

		expect(lList.head?.value).toBe(3);
		expect(lList.tail?.value).toBe(1);

		expect(lList.count()).toBe(3);
	});

	it('should prepend a value to the list', () => {
		linkedList.prepend(0);

		expect(linkedList.head?.next?.value).toBe(1);

		expect(linkedList.head?.prev).toBeNull();

		expect(linkedList.head?.value).toBe(0);
		expect(linkedList.tail?.value).toBe(3);

		expect(linkedList.count()).toBe(4);
	});

	it('should remove a value from the start of the list', () => {
		expect(linkedList.removeHead()?.value).toBe(1);

		expect(linkedList.head?.prev).toBeNull();

		expect(linkedList.toArray()).toEqual([2, 3]);

		expect(linkedList.count()).toBe(2);
	});

	it('should not remove a value from an empty list', () => {
		const lList = new LinkedList();

		expect(lList.removeHead()).toBeNull();

		expect(lList.head).toBeNull();
		expect(lList.tail).toBeNull();

		expect(lList.toArray()).toEqual([]);

		expect(lList.count()).toBe(0);
	});

	it('should remove a single value from the list', () => {
		const lList = LinkedList.from([1]);

		expect(lList.removeHead()?.value).toBe(1);

		expect(lList.head).toBeNull();
		expect(lList.tail).toBeNull();

		expect(lList.toArray()).toEqual([]);

		expect(lList.count()).toBe(0);
	});

	it('should remove a value from the end of the list', () => {
		expect(linkedList.removeTail()?.value).toBe(3);

		expect(linkedList.head?.prev).toBeNull();

		expect(linkedList.toArray()).toEqual([1, 2]);

		expect(linkedList.count()).toBe(2);
	});

	it('should remove a value from the end of the list', () => {
		const lList = new LinkedList();

		expect(lList.removeTail()).toBeNull();

		expect(lList.head).toBeNull();
		expect(lList.tail).toBeNull();

		expect(lList.toArray()).toEqual([]);

		expect(lList.count()).toBe(0);
	});

	it('should remove a single value from the list', () => {
		const lList = LinkedList.from([1]);

		expect(lList.removeTail()?.value).toBe(1);

		expect(lList.head).toBeNull();
		expect(lList.tail).toBeNull();

		expect(lList.toArray()).toEqual([]);

		expect(lList.count()).toBe(0);
	});

	it('should remove the specified element from the list', () => {
		linkedList.remove(2);
		linkedList.remove(4);

		expect(linkedList.count()).toBe(2);
		expect(linkedList.toArray()).toEqual([1, 3]);
	});

	it('should remove elements from the list correctly', () => {
		linkedList.remove(3);

		expect(linkedList.count()).toBe(2);
		expect(linkedList.toArray()).toEqual([1, 2]);
	});

	it('should remove all elements from the list correctly', () => {
		linkedList.remove(1);
		linkedList.remove(2);
		linkedList.remove(3);

		expect(linkedList.count()).toBe(0);
		expect(linkedList.toArray()).toEqual([]);
	});

	it('should contain the value in the list', () => {
		expect(linkedList.contains(2)).toBeTruthy();
		expect(linkedList.contains(4)).toBeFalsy();
	});

	it('should return the value if found', () => {
		const obj1 = { name: 'John' };
		const obj2 = { name: 'Jack' };
		const obj3 = { name: 'Jin' };

		const linkedListObjectBased = LinkedList.from([obj1, obj2]);

		expect(linkedListObjectBased.find(obj3)).toBeNull();
		expect(linkedListObjectBased.find(({ name }) => name === 'John')!.value).toBe(
			obj1,
		);
		expect(linkedListObjectBased.find(obj2)!.value).toBe(obj2);
	});

	it('should insert a value at a specific position in the list', () => {
		linkedList.insertAt(10, 2);

		expect(linkedList.toArray()).toEqual([1, 2, 10, 3]);

		expect(linkedList.head?.value).toBe(1);
		expect(linkedList.head?.next?.value).toBe(2);
		expect(linkedList.head?.next?.next?.value).toBe(10);
		expect(linkedList.head?.next?.next?.next?.value).toBe(3);

		expect(linkedList.tail?.value).toBe(3);
		expect(linkedList.tail?.prev?.value).toBe(10);
		expect(linkedList.tail?.prev?.prev?.value).toBe(2);
		expect(linkedList.tail?.prev?.prev?.prev?.value).toBe(1);

		expect(linkedList.count()).toBe(4);
	});

	it('should insert a value at the first position in the list', () => {
		linkedList.insertAt(10, 0);

		expect(linkedList.toArray()).toEqual([10, 1, 2, 3]);

		expect(linkedList.head?.value).toBe(10);
		expect(linkedList.head?.next?.value).toBe(1);
		expect(linkedList.head?.next?.next?.value).toBe(2);
		expect(linkedList.head?.next?.next?.next?.value).toBe(3);

		expect(linkedList.tail?.value).toBe(3);
		expect(linkedList.tail?.prev?.value).toBe(2);
		expect(linkedList.tail?.prev?.prev?.value).toBe(1);
		expect(linkedList.tail?.prev?.prev?.prev?.value).toBe(10);

		expect(linkedList.count()).toBe(4);
	});

	it('should insert a value at the last position in the list', () => {
		linkedList.insertAt(10, 10);

		expect(linkedList.toArray()).toEqual([1, 2, 3, 10]);

		expect(linkedList.head?.value).toBe(1);
		expect(linkedList.head?.next?.value).toBe(2);
		expect(linkedList.head?.next?.next?.value).toBe(3);
		expect(linkedList.head?.next?.next?.next?.value).toBe(10);

		expect(linkedList.tail?.value).toBe(10);
		expect(linkedList.tail?.prev?.value).toBe(3);
		expect(linkedList.tail?.prev?.prev?.value).toBe(2);
		expect(linkedList.tail?.prev?.prev?.prev?.value).toBe(1);

		expect(linkedList.count()).toBe(4);
	});

	it('should insert a value at the last position in an empty list', () => {
		const lList = new LinkedList<number>();

		lList.insertAt(10, 10);

		expect(lList.toArray()).toEqual([10]);

		expect(lList.head?.value).toBe(10);
		expect(lList.tail?.value).toBe(10);

		expect(lList.count()).toBe(1);
	});

	it('should insert a value at the last position in a list with one item', () => {
		const lList = LinkedList.from([2]);

		lList.insertAt(10, 10);

		expect(lList.toArray()).toEqual([2, 10]);

		expect(lList.head?.value).toBe(2);
		expect(lList.head?.next?.value).toBe(10);

		expect(lList.tail?.value).toBe(10);
		expect(lList.tail?.prev?.value).toBe(2);

		expect(lList.count()).toBe(2);
	});

	it('should insert a value at the first position in a list with one item', () => {
		const lList = LinkedList.from([2]);

		lList.insertAt(10, 0);

		expect(lList.toArray()).toEqual([10, 2]);

		expect(lList.head?.value).toBe(10);
		expect(lList.head?.next?.value).toBe(2);

		expect(lList.tail?.value).toBe(2);
		expect(lList.tail?.prev?.value).toBe(10);

		expect(lList.count()).toBe(2);
	});

	it('should generate the correct list based on the array', () => {
		const lList = LinkedList.from([1, 2, 3]);

		expect(lList.head?.next?.next).toBe(lList.tail);
		expect(lList.head?.prev).toBeNull();

		expect(lList.tail?.next).toBeNull();
		expect(lList.tail?.prev?.prev).toBe(lList.head);

		expect(lList.head?.value).toBe(1);
		expect(lList.tail?.value).toBe(3);

		expect(lList.count()).toBe(3);
	});

	it('should reverse the linked list', () => {
		linkedList.reverse();

		expect(linkedList.head?.prev).toBeNull();
		expect(linkedList.head?.value).toBe(3);
		expect(linkedList.head?.next?.value).toBe(2);
		expect(linkedList.head?.next?.next?.value).toBe(1);

		expect(linkedList.head?.next?.next).toBe(linkedList.tail);
		expect(linkedList.tail?.prev?.prev).toBe(linkedList.head);

		expect(linkedList.tail?.next).toBeNull();
		expect(linkedList.tail?.value).toBe(1);
		expect(linkedList.tail?.prev?.value).toBe(2);
		expect(linkedList.tail?.prev?.prev?.value).toBe(3);

		expect(linkedList.toArray()).toEqual([3, 2, 1]);
	});

	it('should generate the correct array', () => {
		expect(linkedList.toArray()).toEqual([1, 2, 3]);
	});

	it('should correctly work with the iterator', () => {
		/**
		 * values like in linkedList in beforeEach section
		 */
		const expectedValues = [1, 2, 3];
		/**
		 * index to compare value from array of expected numbers and sheet
		 */
		let index = 0;

		for (const value of linkedList) {
			expect(value).toBe(expectedValues[index]);
			index++;
		}
	});

	it('should make the linked list empty after calling clear()', () => {
		linkedList.clear();

		expect(linkedList.count()).toBe(0);
	});
});
