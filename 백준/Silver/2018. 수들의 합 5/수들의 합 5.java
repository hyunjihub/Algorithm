import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int number = Integer.parseInt(br.readLine());
		
		int sum;
		int answer = 0;
		for (int i=1; i<=number; i++) {
			sum = 0;
			for (int j=i; j<=number; j++) {
				sum += j;
				if (sum==number) {
					answer++;
					break;
				}
				else if (sum>number) break;
			}
		}
		System.out.println(answer);
	}
}