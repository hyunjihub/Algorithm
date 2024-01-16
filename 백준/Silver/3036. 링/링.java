import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int number = Integer.parseInt(br.readLine());
		String[] string = br.readLine().split(" ");
		int first = Integer.parseInt(string[0]);
		int circle = 0;
		int gcd = 0;
		for (int i=1; i<number; i++) {
			circle = Integer.parseInt(string[i]);
			gcd = gcd(first, circle);
			System.out.println(first/gcd + "/" + circle/gcd);
		}
	}
	
	public static int gcd(int a, int b) {
		if(a%b==0) return b;
		else {
			return gcd(b, a%b);
		}
	}
}