import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] string = br.readLine().split(" ");
		
		int A = Integer.parseInt(string[0]);
		int B = Integer.parseInt(string[1]);
		int V = Integer.parseInt(string[2]);
		
		if((V-B)%(A-B)==0) {
			System.out.print((V-B)/(A-B));
		}
		else {
			System.out.print(((V-B)/(A-B))+1);
		}	
	}
}