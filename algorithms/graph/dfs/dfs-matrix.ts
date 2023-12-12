import { GraphMatrix } from '../../../data_structures/graphs/types';

/**
 * O(n^2)
 */
function DFSMatrix(g: GraphMatrix, start: number) {
	if (!g[start]) {
		return new Set();
	}

	const visited = new Set();
	const stack = [start];

	while (stack.length) {
		const currentVertex = stack.pop()!;
		visited.add(currentVertex);

		for (let i = 0; i < g[currentVertex].length; i++) {
			if (g[currentVertex][i] === 1 && !visited.has(i)) {
				stack.push(i);
			}
		}
	}

	return visited;
}

function DFSMatrixRecursive(g: GraphMatrix, start: number, visited = new Set()) {
	if (!g[start]) {
		return new Set();
	}

	visited.add(start);

	for (let i = 0; i < g[start].length; i++) {
		if (g[start][i] === 1 && !visited.has(i)) {
			DFSMatrixRecursive(g, i, visited);
		}
	}

	return visited;
}

export {
	DFSMatrix,
	DFSMatrixRecursive,
};
