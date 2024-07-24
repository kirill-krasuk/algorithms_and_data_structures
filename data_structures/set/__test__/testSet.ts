import type LinkedList from '../../list/linked-list/LinkedList';
import type { SetBase } from '../SetBase';

interface SetConstructorType {
	new (): SetBase<any>;
	from: <From>(list?: From[] | SetBase<From> | LinkedList<From>) => SetBase<From>;
	name: string;
}

function testSet(SetConstructor: SetConstructorType) {
	describe(`${SetConstructor.name}`, () => {
		let set: SetBase<any>;

		beforeEach(() => {
			set = SetConstructor.from([1, 2, 3, 4]);
		});

		it('should consist of unique values', () => {
			const uniqSet = SetConstructor.from([1, 2, 2, 3, 3]);

			expect(uniqSet.toArray()).toEqual([1, 2, 3]);
		});

		it('should work with strings unique values', () => {
			const uniqSet = SetConstructor.from(['a', 'test', 'b', 'b', 'foo']);

			expect(uniqSet.toArray()).toEqual(['a', 'test', 'b', 'foo']);
		});

		it('should work with object unique values', () => {
			const obj = { foo: 1 };

			const uniqSet = SetConstructor.from([{ a: 1 }, { a: 1 }, obj, obj]);

			expect(uniqSet.toArray()).toEqual([{ a: 1 }, { a: 1 }, obj]);
		});

		it('should method "add" add value to set', () => {
			set.add(50);

			expect(set.toArray()).toEqual([1, 2, 3, 4, 50]);
		});

		it('should method "addSubset" add array or other set values to set', () => {
			set.addSubset([4, 5]);
			expect(set.toArray()).toEqual([1, 2, 3, 4, 5]);

			const set2 = SetConstructor.from([4, 5, 6, 7]);

			set.addSubset(set2);
			expect(set.toArray()).toEqual([1, 2, 3, 4, 5, 6, 7]);
		});

		it('should method "remove" remove value from set', () => {
			set.remove(2);

			expect(set.toArray()).toEqual([1, 3, 4]);
		});

		it('should return a union', () => {
			const set2 = SetConstructor.from([3, 4, 5]);
			const set3 = set.union(set2);

			expect(set3.toArray()).toEqual([1, 2, 3, 4, 5]);
		});

		it('should return an intersection', () => {
			const set2 = SetConstructor.from([3, 4, 5]);
			const set3 = set.intersection(set2);

			expect(set3.toArray()).toEqual([3, 4]);
		});

		it('should return a difference', () => {
			const set2 = SetConstructor.from([3, 4, 5]);
			const set3 = set.difference(set2);

			expect(set3.toArray()).toEqual([1, 2]);
		});

		it('should return a symmetric difference', () => {
			const set2 = SetConstructor.from([3, 4, 5]);
			const set3 = set.symmetricDifference(set2);

			expect(set3.toArray()).toEqual([1, 2, 5]);
		});

		it('should return is a subset', () => {
			const set2 = SetConstructor.from([3, 4]);

			expect(set.isSubset(set2)).toBeTruthy();
		});

		it('should return is a not subset', () => {
			const set2 = SetConstructor.from([3, 4, 5]);

			expect(set.isSubset(set2)).toBeFalsy();
		});
	});
}

export default testSet;
