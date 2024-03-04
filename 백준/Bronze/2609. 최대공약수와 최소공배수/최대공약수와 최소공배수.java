import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
        public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] input = br.readLine().split(" ");

        int a = Integer.parseInt(input[0]);
        int b = Integer.parseInt(input[1]);

        int max;
        if(a>=b) {
            max = a;
        } else {
            max = b;
        }

        int GCD = 0;

        for(int i=1; i<=max; i++) {
            if(a%i==0 && b%i==0) {
                GCD = i;
            }
        }

        int n1 = a/GCD;
        int n2 = b/GCD;

        int LCD = GCD * n1 * n2;

        System.out.println(GCD);
        System.out.println(LCD);
    }   
}
