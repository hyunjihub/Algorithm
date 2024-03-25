import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class Main {

    static ArrayList<Long> fibonacci = new ArrayList<>();
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int n = Integer.parseInt(br.readLine());

        for(int i=0; i<3; i++) {
            fibonacci.add(Long.valueOf(1));
        }
        if(n<=3) {
            System.out.print(1);
        } else {
            System.out.print(fibo(n));
        }
    }

    public static long fibo(int n) {
        long cal;
        for(int i=4; i<=n; i++) {
            cal = fibonacci.get(i-2)+fibonacci.get(i-4);
            fibonacci.add(cal);
        }
        return fibonacci.get(fibonacci.size()-1);
    }
}
