import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int length = Integer.parseInt(br.readLine());
		int[] cake = new int[length+1];
		Arrays.fill(cake, 0);
		int number = Integer.parseInt(br.readLine());
		String[][] string = new String[number+1][2];
		String[] temp;
		
		for (int i=1; i<=number; i++) {
			temp = br.readLine().split(" ");
			string[i][0] = temp[0];
			string[i][1] = temp[1];
			for (int k=Integer.parseInt(string[i][0]); k<=Integer.parseInt(string[i][1]); k++) {
				if (cake[k]==0) cake[k] = i;
			}
		}
		
		int expect = 0;
		int expect_in = 0;
		for (int i=1; i<=number; i++) {
			int n = Integer.parseInt(string[i][1])-Integer.parseInt(string[i][0]);
			if (expect<n) {
				expect = n;
				expect_in = i;
			}
		}
		
		int[] count = new int[length+1];
		Arrays.fill(count, 0);
		
		for (int i=1; i<count.length; i++) {
			count[cake[i]]++;
		}
		int max=0;
		int index = 0;
		for (int i=1; i<count.length; i++) {
			if (max<count[i]) {
				max = count[i];
				index = i;
			}
		}
		
		System.out.println(expect_in);
		System.out.print(index);
		
	}
}