import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int number = Integer.parseInt(br.readLine());
		String[] string;
		int[][] card = new int[number][5];
		for (int i=0; i<number; i++) {
			string = br.readLine().split(" ");
			for (int j=0; j<5; j++) {
				card[i][j] = Integer.parseInt(string[j]);
			}
		}
		
		int[] answer = new int[number];
		int index = 0;
		int sum, max = 0;
		while(index<number) {
			max = 0;
			for (int i=0; i<3; i++) {
				for (int j=i+1; j<4; j++) {
					for (int k=j+1; k<5; k++) {
						sum = (card[index][i]+card[index][j]+card[index][k])%10;
						if (max<=sum) {
							answer[index] = sum;
							max = sum;
						}
					}
				}
			}
			index++;
		}
		max = 0;
		int n = 0;
		for (int i=0; i<number; i++) {
			if (max<=answer[i]) {
				n = i;
				max = answer[i];
			}
		}
		System.out.print(n+1);
	}
}