import Deque from '../../data_structures/queue/deque/Deque';

function slidingWindow<T>(array: T[], windowSize: number): T[][] {
	const result: T[][] = [];
	const windowDeque: Deque<T> = new Deque<T>();

	for (let i = 0; i < array.length; i++) {
		// Add new element to the end of the Deque
		windowDeque.enqueueBack(array[i]);

		// Remove elements from the front of the Deque that are out of the current window
		if (windowDeque.size() > windowSize) {
			windowDeque.dequeueFront();
		}

		// If the current window has reached the required size, add it to the result
		if (windowDeque.size() === windowSize) {
			result.push(windowDeque.toArray());
		}
	}

	return result;
}

export default slidingWindow;
