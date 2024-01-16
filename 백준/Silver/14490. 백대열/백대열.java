import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] string = br.readLine().split(":");
		int a = Integer.parseInt(string[0]);
		int b = Integer.parseInt(string[1]);
		
		int gcd = gcd(a,b);
		System.out.print(a/gcd+":"+b/gcd);
	}

	public static int gcd(int a, int b) {
		if(a%b==0) return b;
		else {
			return gcd(b, a%b);
		}
	}
}