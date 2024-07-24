/* eslint-disable no-restricted-syntax */
import LinkedList from '../linked-list/LinkedList';

let linkedList: LinkedList<number>;

/*
	использовать для визуализации в vscode debug visualizer расширении

	hedietDbgVis.createGraphFromPointers(
		hedietDbgVis.tryEval([linkedList.head]),
		n => ({
			id: n.value,
			color: "lightblue",
			label: `${n.value}`,
			edges: [{ to: n.next, label: "next" }].filter(i => !!i.to),
		})
	)
*/

describe('LinkedList', () => {
	beforeEach(() => {
		linkedList = LinkedList.from([1, 2, 3]);
	});

	it('should append a value to the end of the list', () => {
		linkedList.append(20);

		expect(linkedList.getLength()).toBe(4);
		expect(linkedList.toArray()).toEqual([1, 2, 3, 20]);
	});

	it('should prepend a value to the list correctly', () => {
		linkedList.prepend(0);

		expect(linkedList.getLength()).toBe(4);
		expect(linkedList.toArray()).toEqual([0, 1, 2, 3]);
	});

	it('should insert a value at the specified position', () => {
		linkedList.insertAt(10, 1);

		expect(linkedList.getLength()).toBe(4);
		expect(linkedList.toArray()).toEqual([1, 10, 2, 3]);
	});

	it('should insert a value at the first position', () => {
		linkedList.insertAt(10, 0);

		expect(linkedList.getLength()).toBe(4);
		expect(linkedList.toArray()).toEqual([10, 1, 2, 3]);
	});

	it('should insert a value at the last position', () => {
		linkedList.insertAt(10, 3);

		expect(linkedList.getLength()).toBe(4);
		expect(linkedList.toArray()).toEqual([1, 2, 3, 10]);
	});

	it('should insert value at the last position if the position index is greater than the list length', () => {
		linkedList.insertAt(10, 5);

		expect(linkedList.getLength()).toBe(4);
		expect(linkedList.toArray()).toEqual([1, 2, 3, 10]);
	});

	it('should insert a value into an empty list', () => {
		const lList = new LinkedList();

		lList.insertAt(1).insertAt(2).insertAt(3);

		expect(lList.getLength()).toBe(3);
		expect(lList.toArray()).toEqual([3, 2, 1]);
	});

	it('should correctly create a list based on an array', () => {
		const lList = LinkedList.from([10, 20, 30]);

		expect(lList.toArray()).toEqual([10, 20, 30]);
	});

	it('should remove the specified element', () => {
		linkedList.remove(2);
		linkedList.remove(4);

		expect(linkedList.getLength()).toBe(2);
		expect(linkedList.toArray()).toEqual([1, 3]);
	});

	it('should remove the first element', () => {
		linkedList.removeHead();

		expect(linkedList.getLength()).toBe(2);
		expect(linkedList.toArray()).toEqual([2, 3]);
	});

	it('should remove the last element', () => {
		linkedList.removeTail();

		expect(linkedList.getLength()).toBe(2);
		expect(linkedList.toArray()).toEqual([1, 2]);
	});

	it('should correctly remove the last element', () => {
		linkedList.remove(3);

		expect(linkedList.getLength()).toBe(2);
		expect(linkedList.toArray()).toEqual([1, 2]);
	});

	it('should remove all elements from the list correctly', () => {
		linkedList.remove(1);
		linkedList.remove(2);
		linkedList.remove(3);

		expect(linkedList.getLength()).toBe(0);
		expect(linkedList.toArray()).toEqual([]);
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

	it('should check if the value exists in the list', () => {
		expect(linkedList.contains(2)).toBeTruthy();
		expect(linkedList.contains(4)).toBeFalsy();
	});

	it('should reverse the list', () => {
		linkedList.reverse();

		expect(linkedList.toArray()).toEqual([3, 2, 1]);
	});

	it('should work correctly with the iterator', () => {
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

		expect(linkedList.getLength()).toBe(0);
	});
});
