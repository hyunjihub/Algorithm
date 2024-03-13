import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int number = Integer.parseInt(br.readLine());

        for(int i=2; i<10000; i++) {
            if(isPrime(i)) {
                int next = nextPrime(i);
                if(i*next>number) {
                    System.out.print(i*next);
                    break;
                }
            }
        }
    }

    public static boolean isPrime(int number) {
        if(number==2) {
            return true;
        } else {
            for(int i=2; i<number; i++) {
                if(number%i==0) {
                    return false;
                }
            }
        }
        return true;
    }

    public static int nextPrime(int number) {
        for(int i=number+1; i<10000; i++) {
            if(isPrime(i)) return i;
        }
        return 0;
    }
}

