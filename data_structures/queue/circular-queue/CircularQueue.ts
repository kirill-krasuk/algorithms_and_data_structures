class CircularQueue {
	queue: number[];
	head = 0;
	size = 0;
	capacity: number;

	constructor(k: number) {
		this.queue = new Array<number>(k);
		this.capacity = k;
	}

	enqueue(value: number): boolean {
		if (this.isFull()) return false;

		const tail = (this.head + this.size) % this.capacity;
		this.queue[tail] = value;
		this.size++;

		return true;
	}

	dequeue(): boolean {
		if (this.isEmpty()) return false;

		this.head = (this.head + 1) % this.capacity;
		this.size--;

		return true;
	}

	front(): number {
		if (this.isEmpty()) return -1;

		return this.queue[this.head];
	}

	rear(): number {
		if (this.isEmpty()) return -1;

		const tail = (this.head + this.size - 1) % this.capacity;

		return this.queue[tail];
	}

	isEmpty(): boolean {
		return !this.size;
	}

	isFull(): boolean {
		return this.size === this.capacity;
	}
}

export default CircularQueue;
