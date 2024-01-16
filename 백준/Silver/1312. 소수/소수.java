import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] string = br.readLine().split(" ");
		double A = Double.parseDouble(string[0]);
		double B = Double.parseDouble(string[1]);
		int C = Integer.parseInt(string[2]);	
		
		double mod = A%B;
		int quotient = 0;
		for (int i=0; i<C; i++) {
			quotient = (int)(mod*10/B);
			mod = (mod*10)%B;
		}
		
		System.out.print(quotient);
		
	}
}