import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] input = br.readLine().split(" ");

        int N = Integer.parseInt(input[0]);
        int K = Integer.parseInt(input[1]);

        ArrayList<Integer> divisor = new ArrayList<Integer>(); 

        for (int i=1; i<=N; i++) {
            if(N%i==0) {
                divisor.add(i);
            }
        }
        
        if(divisor.size()<K) {
            System.out.print("0");
        } else {
            System.out.print(divisor.get(K-1));
        }
        
    }   
}