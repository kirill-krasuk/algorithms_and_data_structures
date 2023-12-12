import insertionSortList from '../insertion/insertion_linked_list';
import LinkedNode from '../../../data_structures/list/linked-list/Node';

describe('Insertion sort with linked list', () => {
	it('should sort a list of integers in ascending order', () => {
		const head = new LinkedNode(4);
		head.next = new LinkedNode(2);
		head.next.next = new LinkedNode(1);
		head.next.next.next = new LinkedNode(3);

		const result = insertionSortList(head);

		expect(result?.value).toBe(1);
		expect(result?.next?.value).toBe(2);
		expect(result?.next?.next?.value).toBe(3);
		expect(result?.next?.next?.next?.value).toBe(4);
		expect(result?.next?.next?.next?.next).toBeNull();
	});

	it('should return the same list if it is already sorted', () => {
		const head = new LinkedNode(1);
		head.next = new LinkedNode(2);
		head.next.next = new LinkedNode(3);
		head.next.next.next = new LinkedNode(4);

		const result = insertionSortList(head);

		expect(result).toBe(head);
	});

	it('should sort a list of integers with duplicates', () => {
		const head = new LinkedNode(4);
		head.next = new LinkedNode(2);
		head.next.next = new LinkedNode(1);
		head.next.next.next = new LinkedNode(3);
		head.next.next.next.next = new LinkedNode(2);

		const result = insertionSortList(head);

		expect(result?.value).toBe(1);
		expect(result?.next?.value).toBe(2);
		expect(result?.next?.next?.value).toBe(2);
		expect(result?.next?.next?.next?.value).toBe(3);
		expect(result?.next?.next?.next?.next?.value).toBe(4);
		expect(result?.next?.next?.next?.next?.next).toBeNull();
	});

	it('should sort a list of integers with two nodes in descending order', () => {
		const head = new LinkedNode(2);
		head.next = new LinkedNode(1);

		const result = insertionSortList(head);

		expect(result?.value).toBe(1);
		expect(result?.next?.value).toBe(2);
		expect(result?.next?.next).toBeNull();
	});

	it('should sort a list of integers with two nodes in ascending order when using a custom comparator', () => {
		const head = new LinkedNode(2);
		head.next = new LinkedNode(1);

		const comparator = (a: number, b: number) => a - b;

		const result = insertionSortList(head, comparator);

		expect(result?.value).toBe(1);
		expect(result?.next?.value).toBe(2);
		expect(result?.next?.next).toBeNull();
	});

	it('should sort a list of integers with two nodes in descending order when using a custom comparator', () => {
		const head = new LinkedNode(1);
		head.next = new LinkedNode(2);

		const comparator = (a: number, b: number) => b - a;

		const result = insertionSortList(head, comparator);

		expect(result?.value).toBe(2);
		expect(result?.next?.value).toBe(1);
		expect(result?.next?.next).toBeNull();
	});

	it('should sort a list of objects with two nodes in descending order when using a custom comparator', () => {
		const head = new LinkedNode({ value: 1 });
		head.next = new LinkedNode({ value: 3 });
		head.next.next = new LinkedNode({ value: 2 });

		const result = insertionSortList(head, (a, b) => b.value - a.value);

		expect(result?.value).toEqual({ value: 3 });
		expect(result?.next?.value).toEqual({ value: 2 });
		expect(result?.next?.next?.value).toEqual({ value: 1 });
		expect(result?.next?.next?.next).toBeNull();
	});
});
