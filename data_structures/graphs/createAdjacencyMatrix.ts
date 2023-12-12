import { Graph, GraphMatrix } from './types';

/**
 * создаст матрицу смежности для графа
 *
 * const graph: Graph = [[0, 1], [1, 2], [2, 0]];
 * вернет [[0, 1, 1], [1, 0, 1], [1, 1, 0]]
 */
function createAdjacencyMatrix(listOfEdges: Graph, isOriented = true): GraphMatrix {
	const vertexCount = Math.max(...listOfEdges.flat()) + 1;

	const matrix = Array.from({ length: vertexCount }, () => Array(vertexCount).fill(0));

	for (const [from, to] of listOfEdges) {
		matrix[from][to] = 1;

		/**
		 * если граф ориентированный, то нужно добавить еще и обратное ребро
		 */
		if (!isOriented) {
			matrix[to][from] = 1;
		}
	}

	return matrix;
}

export default createAdjacencyMatrix;
