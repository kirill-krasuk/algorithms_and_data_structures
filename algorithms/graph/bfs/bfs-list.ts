import { GraphList } from '../../../data_structures/graphs/types';
import Queue from '../../../data_structures/queue/queue/Queue';

/**
 * O(n + m)
 */
function BFSList(g: GraphList, start: number) {
	if (!g[start]) {
		return new Set();
	}

	const visited = new Set();
	const queue = new Queue<number>();

	queue.enqueue(start);

	while (!queue.isEmpty()) {
		const currentVertex = queue.dequeue()!;
		visited.add(currentVertex);

		const neighborVertices = g[currentVertex];

		if (neighborVertices) {
			for (const neighborVertex of neighborVertices) {
				if (!visited.has(neighborVertex)) {
					queue.enqueue(neighborVertex);
				}
			}
		}
	}

	return visited;
}

export default BFSList;
