import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] string = br.readLine().split(" ");
		int n = Integer.parseInt(string[0]);
		int k = Integer.parseInt(string[1]);
		int[][] tri = new int[n][n];
		
		tri[0][0] = 1;
		for (int i=1; i<n; i++) {
			for (int j=0; j<=i; j++) {
				if (j==0 || j==i) tri[i][j] = 1;
				else {
					tri[i][j] = tri[i-1][j-1] + tri[i-1][j];
				}
			}
		}
		System.out.print(tri[n-1][k-1]);
	}
}