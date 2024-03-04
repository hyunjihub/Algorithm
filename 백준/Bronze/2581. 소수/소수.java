import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int M = Integer.parseInt(br.readLine());
        int N = Integer.parseInt(br.readLine());
        
        int sum = 0;
        int min = 10000;
        boolean prime;
        for(int i=M; i<=N; i++) {
            prime = true;
            if(i==1) {
                prime = false;
            }
            else if(i==2) {
                sum = sum + i;
                min = i;
            }
            else {
                for(int j=2; j<i; j++) {
                    if(i%j==0) {
                        prime = false;
                        break;
                    }
                }
                if(prime) {
                    sum = sum + i;
                    if(min>i) {
                        min = i;
                    }
                }
            }
        }

        if(sum==0) {
            System.out.print(-1);
        } else {
            System.out.println(sum);
            System.out.print(min);
        }
    }
}
