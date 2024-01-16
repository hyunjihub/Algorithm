import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int[] height = new int[9];
		int sum = 0;

		for (int i=0; i<9; i++) {
			height[i] = Integer.parseInt(br.readLine());
			sum = sum + height[i];
		}
		Arrays.sort(height);
		sum = sum - 100;
		int index = 0;
		while(true) {
			if(index>=8 || height[index]>sum)break;
			index++;
		}
		
		int index_1 = 0;
		int index_2 = 0;
		for (int i=0; i<=index; i++) {
			if (index_1 != index_2) break;
			for (int k=1; k<=index; k++) {
				if(i!=k) {
					if (height[i]+height[k]==sum) {
						index_1 = i;
						index_2 = k;
						break;
					}
				}
			}
		}
		
		for (int i=0; i<9; i++) {
			if (i!=index_1 && i!=index_2)
				System.out.println(height[i]);
		}
	}
}