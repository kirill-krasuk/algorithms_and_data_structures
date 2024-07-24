import HeapBase from '../HeapBase';

class MinHeap<T> extends HeapBase<T> {
	protected extremumValue = -Infinity;

	compare(i: number, j: number): boolean {
		const leftValue = this.valueExtractor(this.heap[i]);
		const rightValue = this.valueExtractor(this.heap[j]);

		if (leftValue === this.extremumValue) {
			return false;
		}

		if (rightValue === this.extremumValue) {
			return true;
		}

		return leftValue > rightValue;
	}
}

export default MinHeap;
