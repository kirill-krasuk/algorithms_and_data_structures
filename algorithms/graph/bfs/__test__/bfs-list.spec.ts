import { GraphList } from '../../../../data_structures/graphs/types';
import BFSList from '../bfs-list';

describe('Breadth-first search on adjacency list', () => {
	it('should return a set of visited vertices starting from the given vertex', () => {
		// Arrange
		const graph: GraphList<number> = {
			1: [2, 3],
			2: [4, 5],
			3: [6],
			4: [],
			5: [],
			6: [],
		};
		const startVertex = 1;

		// Act
		const result = BFSList(graph, startVertex);

		// Assert
		expect(result).toEqual(new Set([1, 2, 3, 4, 5, 6]));
	});

	it('should return an empty set when given an empty graph', () => {
		// Arrange
		const graph: GraphList<number> = {};
		const startVertex = 1;

		// Act
		const result = BFSList(graph, startVertex);

		// Assert
		expect(result).toEqual(new Set());
	});

	it('should return a set containing only the start vertex when given a graph with only one vertex', () => {
		// Arrange
		const graph: GraphList<number> = {
			1: [],
		};
		const startVertex = 1;

		// Act
		const result = BFSList(graph, startVertex);

		// Assert
		expect(result).toEqual(new Set([1]));
	});

	it('should return an empty set when given a start vertex that does not exist in the graph', () => {
		// Arrange
		const graph: GraphList<number> = {
			1: [2, 3],
			2: [4, 5],
			3: [6],
			4: [],
			5: [],
			6: [],
		};
		const startVertex = 7;

		// Act
		const result = BFSList(graph, startVertex);

		// Assert
		expect(result).toEqual(new Set());
	});
});
