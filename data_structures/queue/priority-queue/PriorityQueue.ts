import MaxHeap from '../../heap/max-heap/MaxHeap';

type QueueCell<T> = {
	value: T;
	priority: number;
};

class PriorityQueue<T> {
	private maxHeap: MaxHeap<QueueCell<T>> = new MaxHeap((obj) => obj.priority);

	size(): number {
		return this.maxHeap.getLength();
	}

	isEmpty(): boolean {
		return this.maxHeap.isEmpty();
	}

	peek(): T | undefined {
		const cell = this.maxHeap.getTop();

		return cell?.value;
	}

	enqueue(value: T, priority: number): void {
		this.maxHeap.insert({ value, priority });
	}

	dequeue(): T | undefined {
		const cell = this.maxHeap.extract();

		return cell?.value;
	}
}

export default PriorityQueue;
