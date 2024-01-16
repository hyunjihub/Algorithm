import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int first = Integer.parseInt(br.readLine());
		
		int max = 0;
		int max_i=0; 
		int count, num;
		int second;
		int number = first;
		for (int i=1; i<=number; i++) {
			count = 2;
			second = i;
			first = number;
			while(true) {
				num = first-second;
				if (num<0) break;
				else {
					count++;
					first = second;
					second = num;
				}
			}
			if (max<count) {
				max = count;
				max_i = i;
			}
		}
		
		System.out.println(max);
		first = number;
		System.out.print(first + " ");
		System.out.print(max_i + " ");
		for (int i=0; i<max-2; i++) {
			num = first - max_i;
			System.out.print(num + " ");
			first = max_i;
			max_i = num;
		}
	}
}