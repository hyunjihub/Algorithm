import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] input = br.readLine().split(" ");

        String A = input[0];
        String B = input[1];

        int min = B.length();
        int diff;
        for(int i=0; i<=B.length()-A.length(); i++) {
            diff = 0;
            for(int j=0; j<A.length(); j++) {
                if(A.charAt(j)!=B.charAt(j+i)) {
                    diff++;
                }
            }
            if(diff<min) {
                min = diff;
            }
        }

        System.out.print(min);

    }
}
