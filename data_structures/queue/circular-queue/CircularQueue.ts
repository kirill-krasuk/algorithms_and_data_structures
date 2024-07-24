class CircularQueue<T> {
	// for test
	public _array: T[];
	public _capacity: number;
	private head = 0;
	private size = 0;

	constructor(bufferSize: number) {
		this._array = new Array<T>(bufferSize);
		this._capacity = bufferSize;
	}

	enqueue(value: T): boolean {
		if (this.isFull()) return false;

		const tail = (this.head + this.size) % this._capacity;
		this._array[tail] = value;
		this.size++;

		return true;
	}

	dequeue(): boolean {
		if (this.isEmpty()) return false;

		// it's not necessary to remove the element from the array
		// just for test
		this._array[this.head] = undefined as unknown as T;
		this.head = (this.head + 1) % this._capacity;
		this.size--;

		return true;
	}

	front(): T | null {
		if (this.isEmpty()) return null;

		return this._array[this.head];
	}

	rear(): T | null {
		if (this.isEmpty()) return null;

		const tail = (this.head + this.size - 1) % this._capacity;

		return this._array[tail];
	}

	isEmpty(): boolean {
		return !this.size;
	}

	isFull(): boolean {
		return this.size === this._capacity;
	}
}

export default CircularQueue;
