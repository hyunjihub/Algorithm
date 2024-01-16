import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int number = Integer.parseInt(br.readLine());

		int floor, unit;
		int[][] n_family = new int[15][15];
		for (int i=0; i<15; i++) {
			for (int n=0; n<15; n++) {
				n_family[i][n] = 0;
			}
		}
		for (int i=1; i<15; i++) {
			n_family[0][i] = i;
		}
		
		for (int i=1; i<15; i++) {
			for (int n=1; n<15; n++) {
				for (int m=1; m<=n; m++) {
					n_family[i][n] = n_family[i-1][m] + n_family[i][n];
				}
			}
		}
		
		for (int i=0; i<number; i++) {
			floor = Integer.parseInt(br.readLine());
			unit = Integer.parseInt(br.readLine());
			
			System.out.println(n_family[floor][unit]);
			
		}
	}
}