import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] temp;
		int continuity, use, vacation;
		int case_n = 0;
		while(true) {
			case_n++;
			temp = br.readLine().split(" ");
			if (temp[0].equals("0") && temp[1].equals("0") && temp[2].equals("0")) break;
			else {
				continuity=Integer.parseInt(temp[1]);
				use=Integer.parseInt(temp[0]);
				vacation=Integer.parseInt(temp[2]);
			}
			
			
			int cal = vacation/continuity;
			int mod = vacation%continuity;
			int max=0;
			if(mod<=use) max = cal*use+mod;
			else max = cal*use+use;
			System.out.println("Case " + case_n + ": " + max);
		}
	}
}