import { GraphMatrix } from '../../../../data_structures/graphs/types';
import { DFSMatrix, DFSMatrixRecursive } from '../dfs-matrix';

describe('Depth-first search on adjacency matrix', () => {
	describe('iterative', () => {
		it('should return a Set containing only the start vertex when the graph has only one vertex', () => {
			const graph: GraphMatrix = [[0]];

			const start = 0;
			const result = DFSMatrix(graph, start);

			expect(result).toEqual(new Set([start]));
		});

		it('should return a Set containing all vertices when the graph is a complete graph', () => {
			const graph: GraphMatrix = [
				[0, 1, 1],
				[1, 0, 1],
				[1, 1, 0],
			];

			const start = 0;
			const result = DFSMatrix(graph, start);

			expect(result).toEqual(new Set([0, 1, 2]));
		});

		it('should return a Set containing all vertices reachable from the start vertex in a connected graph', () => {
			const graph: GraphMatrix = [
				[0, 1, 0, 0],
				[1, 0, 1, 0],
				[0, 1, 0, 1],
				[0, 0, 1, 0],
			];

			const start = 0;
			const result = DFSMatrix(graph, start);

			expect(result).toEqual(new Set([0, 1, 2, 3]));
		});

		it('should return an empty Set when the graph is empty', () => {
			const graph: GraphMatrix = [];

			const start = 0;
			const result = DFSMatrix(graph, start);

			expect(result).toEqual(new Set());
		});
	});

	describe('recursive', () => {
		it('should return a Set containing only the start vertex when the graph has only one vertex', () => {
			const graph: GraphMatrix = [[0]];

			const start = 0;
			const result = DFSMatrixRecursive(graph, start);

			expect(result).toEqual(new Set([start]));
		});

		it('should return a Set containing all vertices when the graph is a complete graph', () => {
			const graph: GraphMatrix = [
				[0, 1, 1],
				[1, 0, 1],
				[1, 1, 0],
			];

			const start = 0;
			const result = DFSMatrixRecursive(graph, start);

			expect(result).toEqual(new Set([0, 1, 2]));
		});

		it('should return a Set containing all vertices reachable from the start vertex in a connected graph', () => {
			const graph: GraphMatrix = [
				[0, 1, 0, 0],
				[1, 0, 1, 0],
				[0, 1, 0, 1],
				[0, 0, 1, 0],
			];

			const start = 0;
			const result = DFSMatrixRecursive(graph, start);

			expect(result).toEqual(new Set([0, 1, 2, 3]));
		});

		it('should return an empty Set when the graph is empty', () => {
			const graph: GraphMatrix = [];

			const start = 0;
			const result = DFSMatrixRecursive(graph, start);

			expect(result).toEqual(new Set());
		});
	});
});
