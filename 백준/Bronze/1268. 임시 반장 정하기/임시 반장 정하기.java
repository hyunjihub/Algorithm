import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.HashSet;

public class Main {

	static HashSet<Integer> set = new HashSet<>();
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int number = Integer.parseInt(br.readLine());
		int[] count = new int[number];
		Arrays.fill(count, 0);
		int[][] student = new int[number][5];
		String[] string;
		for(int i=0; i<number; i++) {
			string = br.readLine().split(" ");
			for (int k=0; k<5; k++) {
				student[i][k] = Integer.parseInt(string[k]);
			}
		}

		int index = same_class(student, number);
		System.out.print(index+1);
	}
	public static int same_class(int[][] student, int size) {

		int max = 0;
		int index = 0;
		for(int i=0; i<size; i++) {
			set.clear();
			for (int k=0; k<size; k++) {
				if (i!=k) {
					for (int m=0; m<5; m++) {
						if (student[i][m]==student[k][m]) {
							set.add(k);
						}
					}
				}
			}
			if(max<set.size()) {
				max = set.size();
				index = i;
			}
		}

		return index;
	}
}