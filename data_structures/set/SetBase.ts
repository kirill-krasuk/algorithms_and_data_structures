export interface SetBase<T> {
	add(value: T): this;
	addSubset(value: T[] | SetBase<T>): void;
	remove(value: T): boolean;
	contains(value: T): boolean;
	isSubset(set: SetBase<T>): boolean;
	union(set: SetBase<T>): SetBase<T>;
	intersection(set: SetBase<T>): SetBase<T>;
	difference(set: SetBase<T>): SetBase<T>;
	symmetricDifference(set: SetBase<T>): SetBase<T>;
	toArray(): T[];
	toString(): string;
}
