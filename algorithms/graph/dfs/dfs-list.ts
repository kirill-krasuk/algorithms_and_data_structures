import { GraphList } from '../../../data_structures/graphs/types';
import Stack from '../../../data_structures/stack/stack/Stack';

/**
 * O(n + m)
 */
function DFSList(g: GraphList, start: number) {
	if (!g[start]) {
		return new Set();
	}

	const visited = new Set();
	const stack = new Stack<number>();

	stack.push(start);

	while (!stack.isEmpty()) {
		const currentVertex = stack.pop()!;
		visited.add(currentVertex);

		const neighborVertices = g[currentVertex];

		for (const neighborVertex of neighborVertices) {
			if (!visited.has(neighborVertex)) {
				stack.push(neighborVertex);
			}
		}
	}

	return visited;
}

function DFSListRecursive(g: GraphList, start: number, visited = new Set()) {
	if (!g[start]) {
		return visited;
	}

	visited.add(start);

	const neighborVertices = g[start];

	for (const neighborVertex of neighborVertices) {
		if (!visited.has(neighborVertex)) {
			DFSListRecursive(g, neighborVertex, visited);
		}
	}

	return visited;
}

export { DFSList, DFSListRecursive };
