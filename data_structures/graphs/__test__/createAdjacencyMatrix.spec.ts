import createAdjacencyMatrix from '../createAdjacencyMatrix';
import { Graph } from '../types';

describe('createAdjacencyMatrix', () => {
	it('should create a correct adjacency matrix for a simple undirected graph', () => {
		const listOfEdges: Graph = [
			[0, 1],
			[1, 2],
			[2, 0],
		];

		const expectedMatrix = [
			[0, 1, 1],
			[1, 0, 1],
			[1, 1, 0],
		];

		expect(createAdjacencyMatrix(listOfEdges, false)).toEqual(expectedMatrix);
	});

	it('should create a correct adjacency matrix for a simple directed graph', () => {
		const listOfEdges: Graph = [
			[0, 1],
			[1, 2],
			[2, 0],
		];

		const expectedMatrix = [
			[0, 1, 0],
			[0, 0, 1],
			[1, 0, 0],
		];

		expect(createAdjacencyMatrix(listOfEdges)).toEqual(expectedMatrix);
	});

	it('should create a correct adjacency matrix for a graph with multiple edges between vertices', () => {
		const listOfEdges: Graph = [
			[0, 1],
			[1, 2],
			[2, 0],
			[0, 1],
		];

		const expectedMatrix = [
			[0, 1, 1],
			[1, 0, 1],
			[1, 1, 0],
		];

		expect(createAdjacencyMatrix(listOfEdges, false)).toEqual(expectedMatrix);
	});
});
