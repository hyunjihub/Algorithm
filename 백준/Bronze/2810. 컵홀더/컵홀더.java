import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int number = Integer.parseInt(br.readLine());
		String seat = br.readLine();

		int max = 1;
		int i;
		for (i=0; i<number; i++) {
			if(seat.charAt(i)=='S') {
				max++;
			}
			else {
				max++;
				i++;
			}
		}

		
		if(max>number) System.out.print(number);
		else System.out.print(max);
	}
}
