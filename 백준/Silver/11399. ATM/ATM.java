import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int number = Integer.parseInt(br.readLine());
		int[] time = new int[number];
		int min = 0;

		String[] string = br.readLine().split(" ");
		for (int i=0; i<number; i++) {
			time[i] = Integer.parseInt(string[i]);
		}

		Arrays.sort(time);
		for (int i=0; i<number; i++) {
			for (int j=0; j<=i; j++) {
				min += time[j];
			}
		}
		System.out.print(min);
	}
}