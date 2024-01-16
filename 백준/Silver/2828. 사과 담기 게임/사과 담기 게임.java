import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] string = br.readLine().split(" ");
		int N = Integer.parseInt(string[0]);
		int M = Integer.parseInt(string[1]);
		int J = Integer.parseInt(br.readLine());
		int[] location = new int[J];
		for (int i=0; i<J; i++) {
			location[i] = Integer.parseInt(br.readLine());
		}

		int count = 0;
		int start = 1;
		int next;
		
		for(int i=0; i<J; i++) {
			next = location[i];
			if (start<=next && next<=start+M-1) {}
			else {
				if (start<next) {
					for (int j=start+1; j<=N; j++) {
						if (j<=next && next<=j+M-1) {
							count++;
							start = j;
							break;
						}
						count++;
					}
				}
				else {
					for (int j=start-1; j>=1; j--) {
						if (j<=next && next<=j+M-1) {
							count++;
							start = j;
							break;
						}
						count++;
					}
				}
			}
			
		}

		System.out.println(count);

	}
}