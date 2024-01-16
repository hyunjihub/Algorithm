import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] temp = br.readLine().split(" ");
		int fruit = Integer.parseInt(temp[0]);
		int length = Integer.parseInt(temp[1]);
		int index = 0;
		int[] fruits = new int[fruit];

		temp = br.readLine().split(" ");
		for (int i=0; i<fruit; i++) {
			fruits[i] = Integer.parseInt(temp[i]);
		}
		Arrays.sort(fruits);
		while(true) {
			if (index>=fruit)
				break;
			if (fruits[index]<=length) {
				length++;
			}
			index++;
		}
		System.out.print(length);
	}
}