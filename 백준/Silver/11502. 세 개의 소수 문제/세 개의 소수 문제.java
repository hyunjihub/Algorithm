import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int cases = Integer.parseInt(br.readLine());
        
        int number;
        ArrayList<Integer> prime;
        for(int i=0; i<cases; i++) {
            number = Integer.parseInt(br.readLine());
            prime = getPrime(number);

            boolean has = false;
            for(int j=0; j<prime.size(); j++) {
                for(int k=0; k<prime.size(); k++) {
                    for(int l=0; l<prime.size(); l++) {
                        if(prime.get(j)+prime.get(k)+prime.get(l)==number) {
                            System.out.println(prime.get(j)+ " " + prime.get(k) + " " +prime.get(l));
                            has = true;
                            break;
                        }
                    }
                    if(has) break;
                }
                if(has) break;
            }

            if(!has) {
                System.out.println(0);
            }
        }
    }

    public static ArrayList<Integer> getPrime(int num) {
        ArrayList<Integer> prime = new ArrayList<>();

        boolean isPrime;
        for(int i=2; i<num; i++) {
            isPrime = true;
            if(i==2) {
                prime.add(i);
                continue;
            }
            for(int j=2; j<i; j++) {
                if(i%j==0) {
                    isPrime = false;
                    break;
                }
            }
            if(isPrime) {
                prime.add(i);
            }
        }

        return prime;
    }
}
