import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {

    static int N;
    static boolean[] Eratosthenes;
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] input = br.readLine().split(" ");

        N = Integer.parseInt(input[0]);
        int K = Integer.parseInt(input[1]);

        Eratosthenes = new boolean[N];
        Arrays.fill(Eratosthenes, true);

        int P;
        int count = 0;
        int answer = 0;
        while (true) {
            if(count>=K) break;
            P = getP();
            for(int i=1; i<N; i++) {
                if(Eratosthenes[i] && ((i+1)%P==0)) {
                    Eratosthenes[i] = false;
                    count++;
                    answer = i+1;
                }
                if(count==K) break;
            }
        }

        System.out.print(answer);
    }
    
    public static int getP() {
        int result=0;
        for(int i=1; i<N; i++) {
            if(Eratosthenes[i]) {
                result = i;
                break;
            }
        }
        return result+1;
    }
}
