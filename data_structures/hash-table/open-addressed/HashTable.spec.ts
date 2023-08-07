/* eslint-disable no-case-declarations */
import HashTable from './HashTable'; // Путь к вашему файлу

import { operations, values, expected } from '../__test__/stub/stress_stub'; // Путь к вашему файлу

describe('Open Addressed HashTable', () => {
	it('should add and retrieve a single key-value pair', () => {
		const hashTable = new HashTable<number, string>();

		hashTable.put(1, 'value1');

		expect(hashTable.get(1)).toBe('value1');
	});

	it('should add and retrieve multiple key-value pairs', () => {
		const hashTable = new HashTable<number, string>();

		hashTable.put(1, 'value1');
		hashTable.put(2, 'value2');
		hashTable.put(3, 'value3');

		expect(hashTable.get(1)).toBe('value1');
		expect(hashTable.get(2)).toBe('value2');
		expect(hashTable.get(3)).toBe('value3');
	});

	it('should remove a single key-value pair', () => {
		const hashTable = new HashTable<number, string>();

		hashTable.put(1, 'value1');
		const isRemoved = hashTable.remove(1);

		expect(hashTable.get(1)).toBe(-1);
		expect(isRemoved).toBe(true);
	});

	it('should return false after remove if key was not exists', () => {
		const hashTable = new HashTable<number, string>();

		hashTable.put(1, 'value1');
		const isRemoved = hashTable.remove(2);

		expect(hashTable.get(1)).toBe('value1');
		expect(isRemoved).toBe(false);
	});

	it('should add a single key-value pair and check if it exists', () => {
		const hashTable = new HashTable<number, string>();

		hashTable.put(1, 'value1');

		expect(hashTable.has(1)).toBe(true);
	});

	it('should add and retrieve multiple key-value pairs with string keys', () => {
		const hashTable = new HashTable<string, string>();

		hashTable.put('key1', 'value1');
		hashTable.put('key2', 'value2');
		hashTable.put('key3', 'value3');

		expect(hashTable.get('key1')).toBe('value1');
		expect(hashTable.get('key2')).toBe('value2');
		expect(hashTable.get('key3')).toBe('value3');
	});

	it('should update the value of an existing key-value pair', () => {
		const hashTable = new HashTable<number, string>();

		hashTable.put(1, 'value1');
		hashTable.put(1, 'value2');

		expect(hashTable.get(1)).toBe('value2');
	});

	it('should rehash when the hash table is full', () => {
		const hashTable = new HashTable<number, string>({ capacity: 2 });

		hashTable.put(1, 'value1');
		hashTable.put(2, 'value2');
		hashTable.put(3, 'value3');

		expect(hashTable.get(1)).toBe('value1');
		expect(hashTable.get(2)).toBe('value2');
		expect(hashTable.get(3)).toBe('value3');
	});

	it('should throw error when threshold more than 100% and hash table is full', () => {
		const hashTable = new HashTable<number, string>({
			capacity: 2,
			threshold: 1.1,
		});

		hashTable.put(1, 'value1');
		hashTable.put(2, 'value2');

		expect(() => hashTable.put(3, 'value3')).toThrowError('Hash table is full');
	});

	it('should pass hashing test with 5000 operations', () => {
		const myHashMap = new HashTable<number, number>();
		const results: (number | null)[] = [];

		// there are more than 5000 operations for better test
		// hashing and collision resolution
		operations.forEach((operation, index) => {
			switch (operation) {
			case 'put':
				myHashMap.put(values[index][0], values[index][1]);
				results.push(null);
				break;
			case 'get':
				const value = myHashMap.get(values[index][0]);
				results.push(value);
				break;
			case 'remove':
				myHashMap.remove(values[index][0]);
				results.push(null);
				break;
			default:
				break;
			}
		});

		expect(results).toEqual(expected);
	});

	it('should pass hashing test with 5000 operations with quadratic probing', () => {
		const myHashMap = new HashTable<number, number>({
			collisionResolution: 'quadratic',
		});
		const results: (number | null)[] = [];

		// there are more than 5000 operations for better test
		// hashing and collision resolution
		operations.forEach((operation, index) => {
			switch (operation) {
			case 'put':
				myHashMap.put(values[index][0], values[index][1]);
				results.push(null);
				break;
			case 'get':
				const value = myHashMap.get(values[index][0]);
				results.push(value);
				break;
			case 'remove':
				myHashMap.remove(values[index][0]);
				results.push(null);
				break;
			default:
				break;
			}
		});

		expect(results).toEqual(expected);
	});

	it('should pass hashing test with 5000 operations with double hash probing', () => {
		const myHashMap = new HashTable<number, number>({
			collisionResolution: 'double hashing',
		});
		const results: (number | null)[] = [];

		// there are more than 5000 operations for better test
		// hashing and collision resolution
		operations.forEach((operation, index) => {
			switch (operation) {
			case 'put':
				myHashMap.put(values[index][0], values[index][1]);
				results.push(null);
				break;
			case 'get':
				const value = myHashMap.get(values[index][0]);
				results.push(value);
				break;
			case 'remove':
				myHashMap.remove(values[index][0]);
				results.push(null);
				break;
			default:
				break;
			}
		});

		expect(results).toEqual(expected);
	});
});
