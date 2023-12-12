import { GraphList } from '../../../../data_structures/graphs/types';
import { DFSList, DFSListRecursive } from '../dfs-list';

describe('Depth-first search on adjacency list', () => {
	describe('iterative', () => {
		it('should return a set of all visited vertices when given a valid graph and a starting vertex', () => {
			const graph: GraphList<number> = {
				1: [2, 3],
				2: [4, 5],
				3: [6],
				4: [],
				5: [],
				6: [],
			};

			const startVertex = 1;
			const result = DFSList(graph, startVertex);

			expect(result).toEqual(new Set([1, 2, 4, 5, 3, 6]));
		});

		it('should return a set containing only the vertex when given a graph with only one vertex', () => {
			const graph: GraphList<number> = {
				1: [],
			};

			const startVertex = 1;
			const result = DFSList(graph, startVertex);

			expect(result).toEqual(new Set([1]));
		});

		it('should return a set containing only the starting vertex when given a graph with no edges', () => {
			const graph: GraphList<number> = {
				1: [],
				2: [],
				3: [],
			};

			const startVertex = 2;
			const result = DFSList(graph, startVertex);

			expect(result).toEqual(new Set([2]));
		});

		it('should return an empty set when given an empty graph and a starting vertex', () => {
			const graph: GraphList<number> = {};

			const startVertex = 1;
			const result = DFSList(graph, startVertex);

			expect(result).toEqual(new Set());
		});
	});

	describe('recursive', () => {
		it('should return a set of all visited vertices when given a valid graph and a starting vertex', () => {
			const graph: GraphList<number> = {
				1: [2, 3],
				2: [4, 5],
				3: [6],
				4: [],
				5: [],
				6: [],
			};

			const startVertex = 1;
			const result = DFSListRecursive(graph, startVertex);

			expect(result).toEqual(new Set([1, 2, 4, 5, 3, 6]));
		});

		it('should return a set containing only the vertex when given a graph with only one vertex', () => {
			const graph: GraphList<number> = {
				1: [],
			};

			const startVertex = 1;
			const result = DFSListRecursive(graph, startVertex);

			expect(result).toEqual(new Set([1]));
		});

		it('should return a set containing only the starting vertex when given a graph with no edges', () => {
			const graph: GraphList<number> = {
				1: [],
				2: [],
				3: [],
			};

			const startVertex = 2;
			const result = DFSListRecursive(graph, startVertex);

			expect(result).toEqual(new Set([2]));
		});

		it('should return an empty set when given an empty graph and a starting vertex', () => {
			const graph: GraphList<number> = {};

			const startVertex = 1;
			const result = DFSListRecursive(graph, startVertex);

			expect(result).toEqual(new Set());
		});
	});
});
