/* eslint-disable no-restricted-syntax */
import LinkedList from '../doubly-linked-list/DoublyLinkedList';

let linkedList: LinkedList<number>;

// function expectLinksCorrect<T>(list: LinkedList<T>, values: T[]) {
// 	expect(list.head?.prev).toBeNull();
// 	expect(list.tail?.next).toBeNull();

// 	for (let i = 0; i < values.length; i++) {
// 		expect(list.getAt(i)?.value).toBe(values[i]);
// 	}

// 	if (values.length > 0) {
// 		expect(list.tail?.value).toBe(values[values.length - 1]);
// 	}
// }

describe('DoublyLinkedList', () => {
	beforeEach(() => {
		linkedList = new LinkedList<number>([1, 2, 3]);
	});

	it('should nodes have links to null if add one item', () => {
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

	it('should nodes have links', () => {
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

	it('should prepend value into empty list', () => {
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

	it('should prepend values into empty list', () => {
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

	it('should prepend value', () => {
		linkedList.prepend(0);

		expect(linkedList.head?.next?.value).toBe(1);

		expect(linkedList.head?.prev).toBeNull();

		expect(linkedList.head?.value).toBe(0);
		expect(linkedList.tail?.value).toBe(3);

		expect(linkedList.count()).toBe(4);
	});

	it('should remove value from start of list', () => {
		expect(linkedList.removeHead()?.value).toBe(1);

		expect(linkedList.head?.prev).toBeNull();

		expect(linkedList.toArray()).toEqual([2, 3]);

		expect(linkedList.count()).toBe(2);
	});

	it('should remove value from empty list', () => {
		const lList = new LinkedList();

		expect(lList.removeHead()).toBeNull();

		expect(lList.head).toBeNull();
		expect(lList.tail).toBeNull();

		expect(lList.toArray()).toEqual([]);

		expect(lList.count()).toBe(0);
	});

	it('should remove a single value from list', () => {
		const lList = new LinkedList([1]);

		expect(lList.removeHead()?.value).toBe(1);

		expect(lList.head).toBeNull();
		expect(lList.tail).toBeNull();

		expect(lList.toArray()).toEqual([]);

		expect(lList.count()).toBe(0);
	});

	it('should remove value from end of list', () => {
		expect(linkedList.removeTail()?.value).toBe(3);

		expect(linkedList.head?.prev).toBeNull();

		expect(linkedList.toArray()).toEqual([1, 2]);

		expect(linkedList.count()).toBe(2);
	});

	it('should remove value from end of list', () => {
		const lList = new LinkedList();

		expect(lList.removeTail()).toBeNull();

		expect(lList.head).toBeNull();
		expect(lList.tail).toBeNull();

		expect(lList.toArray()).toEqual([]);

		expect(lList.count()).toBe(0);
	});

	it('should remove a single value from list', () => {
		const lList = new LinkedList([1]);

		expect(lList.removeTail()?.value).toBe(1);

		expect(lList.head).toBeNull();
		expect(lList.tail).toBeNull();

		expect(lList.toArray()).toEqual([]);

		expect(lList.count()).toBe(0);
	});

	it('should remove desired element', () => {
		linkedList.remove(2);
		linkedList.remove(4);

		expect(linkedList.count()).toBe(2);
		expect(linkedList.toArray()).toEqual([1, 3]);
	});

	it('should remove correctly last element', () => {
		linkedList.remove(3);

		expect(linkedList.count()).toBe(2);
		expect(linkedList.toArray()).toEqual([1, 2]);
	});

	it('should remove all elements correctly', () => {
		linkedList.remove(1);
		linkedList.remove(2);
		linkedList.remove(3);

		expect(linkedList.count()).toBe(0);
		expect(linkedList.toArray()).toEqual([]);
	});

	it('should contains value in list', () => {
		expect(linkedList.contains(2)).toBeTruthy();
		expect(linkedList.contains(4)).toBeFalsy();
	});

	it('should return value if find him', () => {
		const obj1 = { name: 'John' };
		const obj2 = { name: 'Jack' };
		const obj3 = { name: 'Jin' };

		const linkedListObjectBased = new LinkedList([obj1, obj2]);

		expect(linkedListObjectBased.find(obj3)).toBeNull();
		expect(linkedListObjectBased.find(({ name }) => name === 'John')!.value).toBe(
			obj1,
		);
		expect(linkedListObjectBased.find(obj2)!.value).toBe(obj2);
	});

	it('should insert value at position into list', () => {
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

	it('should insert value at first position into list', () => {
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

	it('should insert value at last position into list', () => {
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

	it('should insert value at last position into empty list', () => {
		const lList = new LinkedList<number>();

		lList.insertAt(10, 10);

		expect(lList.toArray()).toEqual([10]);

		expect(lList.head?.value).toBe(10);

		expect(lList.tail?.value).toBe(10);

		expect(lList.count()).toBe(1);
	});

	it('should insert value at last position into list with one item', () => {
		const lList = new LinkedList<number>([2]);

		lList.insertAt(10, 10);

		expect(lList.toArray()).toEqual([2, 10]);

		expect(lList.head?.value).toBe(2);
		expect(lList.head?.next?.value).toBe(10);

		expect(lList.tail?.value).toBe(10);
		expect(lList.tail?.prev?.value).toBe(2);

		expect(lList.count()).toBe(2);
	});

	it('should insert value at first position into list with one item', () => {
		const lList = new LinkedList<number>([2]);

		lList.insertAt(10, 0);

		expect(lList.toArray()).toEqual([10, 2]);

		expect(lList.head?.value).toBe(10);
		expect(lList.head?.next?.value).toBe(2);

		expect(lList.tail?.value).toBe(2);
		expect(lList.tail?.prev?.value).toBe(10);

		expect(lList.count()).toBe(2);
	});

	it('should generate correct list based on array', () => {
		const lList = new LinkedList([1, 2, 3]);

		expect(lList.head?.next?.next).toBe(lList.tail);
		expect(lList.head?.prev).toBeNull();

		expect(lList.tail?.next).toBeNull();
		expect(lList.tail?.prev?.prev).toBe(lList.head);

		expect(lList.head?.value).toBe(1);
		expect(lList.tail?.value).toBe(3);

		expect(lList.count()).toBe(3);
	});

	it('should reverse linkedList', () => {
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

	it('should generate correct array', () => {
		expect(linkedList.toArray()).toEqual([1, 2, 3]);
	});

	it('should correctly worked iterator', () => {
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

	it('should linkedList empty after call clear()', () => {
		linkedList.clear();

		expect(linkedList.count()).toBe(0);
	});
});
