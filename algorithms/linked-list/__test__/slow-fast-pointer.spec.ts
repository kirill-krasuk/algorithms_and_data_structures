import LinkedList from '../../../data_structures/list/linked-list/LinkedList';
import removeFromNthNodeFromEnd from '../slow-fast-pointer';

describe('removeFromNthNodeFromEnd', () => {
	it('should remove the nth node from the end when the list has multiple nodes', () => {
		const list = new LinkedList<number>();
		list.append(1);
		list.append(2);
		list.append(3);
		list.append(4);
		list.append(5);

		removeFromNthNodeFromEnd(list, 2);

		expect(list.toArray()).toEqual([1, 2, 3, 5]);
	});

	it('should return null when trying to remove a node from an empty linked list', () => {
		const list = new LinkedList<number>();

		const result = removeFromNthNodeFromEnd(list, 1);

		expect(result).toBeNull();
	});
});
