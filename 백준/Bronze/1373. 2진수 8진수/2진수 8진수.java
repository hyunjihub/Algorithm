import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		String bi = br.readLine();

		while(bi.length()%3!=0) {
			bi="0"+bi;
		}
		
		StringBuilder sb = new StringBuilder("");
		for(int i=bi.length() % 3; i<bi.length(); i=i+3) {
			sb.append((bi.charAt(i) - '0') * 4 + (bi.charAt(i+1) - '0') * 2 + (bi.charAt(i+2) - '0'));
		}
		
		System.out.print(sb);
	}
}