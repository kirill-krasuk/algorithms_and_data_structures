/* eslint-disable no-restricted-syntax */
import LinkedList from '../linked-list/LinkedList';

let linkedList: LinkedList<number>;

describe('Linked List', () => {
	beforeEach(() => {
		linkedList = new LinkedList([1, 2, 3]);
	});

	it('should append value correctly', () => {
		linkedList.append(20);

		expect(linkedList.count()).toBe(4);
		expect(linkedList.toArray()).toEqual([1, 2, 3, 20]);
	});

	it('should prepend value correctly', () => {
		linkedList.prepend(0);

		expect(linkedList.count()).toBe(4);
		expect(linkedList.toArray()).toEqual([0, 1, 2, 3]);
	});

	it('should insert value to selected position', () => {
		linkedList.insertAt(10, 1);

		expect(linkedList.count()).toBe(4);
		expect(linkedList.toArray()).toEqual([1, 10, 2, 3]);
	});

	it('should insert value to first position', () => {
		linkedList.insertAt(10, 0);

		expect(linkedList.count()).toBe(4);
		expect(linkedList.toArray()).toEqual([10, 1, 2, 3]);
	});

	it('should insert value to last position', () => {
		linkedList.insertAt(10, 3);

		expect(linkedList.count()).toBe(4);
		expect(linkedList.toArray()).toEqual([1, 2, 3, 10]);
	});

	it('should insert value to last position if to position index greater than list length', () => {
		linkedList.insertAt(10, 5);

		expect(linkedList.count()).toBe(4);
		expect(linkedList.toArray()).toEqual([1, 2, 3, 10]);
	});

	it('should insert value to empty list', () => {
		const lList = new LinkedList();

		lList.insertAt(1).insertAt(2).insertAt(3);

		expect(lList.count()).toBe(3);
		expect(lList.toArray()).toEqual([3, 2, 1]);
	});

	it('should correctly create list based on array', () => {
		const lList = new LinkedList([10, 20, 30]);

		expect(lList.toArray()).toEqual([10, 20, 30]);
	});

	it('should remove desired element', () => {
		linkedList.remove(2);
		linkedList.remove(4);

		expect(linkedList.count()).toBe(2);
		expect(linkedList.toArray()).toEqual([1, 3]);
	});

	it('should remove first element', () => {
		linkedList.removeHead();

		expect(linkedList.count()).toBe(2);
		expect(linkedList.toArray()).toEqual([2, 3]);
	});

	it('should remove last element', () => {
		linkedList.removeTail();

		expect(linkedList.count()).toBe(2);
		expect(linkedList.toArray()).toEqual([1, 2]);
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

	it('should check value if it exist in list', () => {
		expect(linkedList.contains(2)).toBeTruthy();
		expect(linkedList.contains(4)).toBeFalsy();
	});

	it('should reverse list', () => {
		linkedList.reverse();

		expect(linkedList.toArray()).toEqual([3, 2, 1]);
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
