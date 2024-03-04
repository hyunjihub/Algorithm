import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
   
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int size = Integer.parseInt(br.readLine());
        String[] S_number = br.readLine().split(" ");

        int number;
        boolean prime;
        int count = 0;
        for(int i=0; i<size; i++) {
            prime = true;
            number = Integer.parseInt(S_number[i]);
            if(number==1) {
                prime = false;
            } else if(number>2) {
                for(int j=2; j<number; j++) {
                    if(number%j==0) {
                        prime = false;
                        break;
                    }
                }
            }
            if(prime) count++;
        }

        System.out.print(count);
    }
 
}
