import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
        public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] input = br.readLine().split(" ");

        int first = Integer.parseInt(input[0]);
        int last = Integer.parseInt(input[1]);
        
        int sum = 0;
        int count = 1;
        for(int i=1; i<=last; i++) {
            for(int j=1; j<=i; j++) {
                if(count>=first) {
                    sum = sum + i;
                }
                count++;
                if(count>last) break;
            }
            if(count>last) break;
        }
        System.out.print(sum);
    }
}

