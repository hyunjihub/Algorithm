import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] string = br.readLine().split(" ");
		int N = Integer.parseInt(string[0]);
		int M = Integer.parseInt(string[1]);
		int V = Integer.parseInt(string[2]);

		int[][] graph = new int[N+1][N+1];
		int v1, v2;

		for (int i=0; i<M; i++) {
			string = br.readLine().split(" ");
			v1 = Integer.parseInt(string[0]);
			v2 = Integer.parseInt(string[1]);
			graph[v1][v2] = 1;
			graph[v2][v1] = 1;
		}
		
		DFS(graph, N, V);
		System.out.println();
		BFS(graph, N, V);
		
	}
	static void DFS(int[][] graph, int N, int V) {
		boolean[] visited = new boolean[N+1];
		Arrays.fill(visited, false);
		Stack<Integer> stack = new Stack<>();
		visited[V] = true;
		int current = V;
		stack.push(current);
		System.out.print(current + " ");
		
		
		boolean hasNear;
		while(!stack.isEmpty()) {
			hasNear = false;
			current = stack.peek();
			for (int i=1; i<N+1; i++) {
				if(graph[current][i]==1 && !visited[i]) {
					hasNear = true;
					stack.push(i);
					visited[i] = true;
					System.out.print(i + " ");
					break;
				}
			}
			if (!hasNear) {
				stack.pop();
			}
		}
	}
	static void BFS(int[][] graph, int N, int V) {
		boolean[] visited = new boolean[N+1];
		Arrays.fill(visited, false);
		Queue<Integer> queue = new LinkedList<>();
		visited[V] = true;
		int current = V;
		queue.add(current);
		
		while(!queue.isEmpty()) {
			current = queue.poll();
			System.out.print(current + " ");
			for (int i=1; i<N+1; i++) {
				if (graph[current][i]==1 && !visited[i]) {
					queue.add(i);
					visited[i] = true;
				}
			}
		}
	}
}