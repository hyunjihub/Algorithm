import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] input = br.readLine().split(" ");

        int N = Integer.parseInt(input[0]);
        double HS = Double.parseDouble(input[1]);
        double JM = Double.parseDouble(input[2]);

        int round = 0;
        while(true) {
            if(HS==JM) break;
            HS = Math.ceil(HS/2);
            JM = Math.ceil(JM/2);
            round++;
        }
        System.out.print(round);
    }
}
