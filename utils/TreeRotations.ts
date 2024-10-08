import type TreeNode from '../data_structures/tree/bst/TreeNode';

class TreeRotations<T, Node extends TreeNode<T> = TreeNode<T>> {
	/**
	 * Zig - правый поворот (по часовой стрелке) вокруг узла.
	 *
	 * Пример:
	 * До поворота:     				 После поворота:
	 * 				    5[x]        		-->        3[y]
	 *                 /   \                          /   \
	 *                3[y]  6                        2    5[x]
	 *               /   \                               /   \
	 *              2     4                             4     6
	 */
	zig(x: Node): Node {
		if (!x.left) {
			return x;
		}

		const y = x.left;
		x.left = y.right || null;
		y.right = x;

		return y as Node;
	}

	/**
	 * Zag - левый поворот (против часовой стрелки) вокруг узла.
	 *
	 * Пример:
	 * До поворота:                    После поворота:
	 *                  3[x]            -->          5[y]
	 *                 /   \                        /   \
	 *                2     5[y]                  3[x]   6
	 *                     /   \                 /	 \
	 *                    4     6               2 	  4
	 */
	zag(x: Node): Node {
		if (!x.right) {
			return x;
		}

		const y = x.right;
		x.right = y.left || null;
		y.left = x;

		return y as Node;
	}

	/**
	 * Zig-Zig - правый двойной поворот (по часовой стрелке).
	 *
	 * Пример:
	 * До поворота:     				 После zig поворота:			После zig поворота:
	 * 				    5[x]        		-->        3[y](x)			  -->		    2(y)
	 *                 /   \                           /    \							  \
	 *                3[y]  6                        2(y)   5[x]						   3(x)
	 *               /   \                                 /   \							 \
	 *              2     4                               4     6							  5
	 * 																					     /  \
	 * 																					    4	 6
	 */
	zigZig(node: Node): Node {
		node = this.zig(node);
		return this.zig(node);
	}

	/**
	 * Zag-Zag - левый двойной поворот (против часовой стрелки).
	 *
	 * Пример:
	 * До поворота:                    После zag поворота:			После zag поворота:
	 *                  3[x]            -->          5[y](x)			  -->			6(y)
	 *                 /   \                        /     \							   /
	 *                2    5[y]                   3[x]     6(y)						 5(x)
	 *                    /   \                  /	 \							    /
	 *                   4     6                2 	  4							   3
	 * 																		     /	\
	 * 																		    2    4
	 */
	zagZag(node: Node): Node {
		node = this.zag(node);
		return this.zag(node);
	}

	/**
	 * Zig-Zag - правый-левый поворот (по часовой стрелке, затем против часовой стрелки).
	 *
	 * Пример:
	 * До поворота:                    После zig поворота:			После zag поворота:
	 *                   3            -->          3(x)			  -->			   4(y)
	 *                  / \                       /   \							   /   \
	 *                 2  5[x]                   2     4[y](y)					 3(x)    5
	 *                   /   \                   	     \						/	      \
	 *                  4[y]  6                 	      5[x]				   2		   6
	 * 												 	   \
	 * 													    6
	 */
	zigZag(node: Node): Node {
		node.right = this.zig(node.right as Node);
		return this.zag(node);
	}

	/**
	 * Zag-Zig - левый-правый поворот (против часовой стрелки, затем по часовой стрелке).
	 *
	 * Пример:
	 * До поворота:     				 После zag поворота:			После zig поворота:
	 * 				     5        		-->        	  	5(x)			  -->			4(y)
	 *                 /  \                            /    \						   /    \
	 *                3[x] 6                        4[y](y)  6						 3      5(x)
	 *               /   \                          /     						  	/		  \
	 *              2     4[y]                    3[x]        					   2	       6
	 * 											 /
	 * 											2
	 */
	zagZig(node: Node): Node {
		node.left = this.zag(node.left as Node);
		return this.zig(node);
	}
}

export default TreeRotations;
