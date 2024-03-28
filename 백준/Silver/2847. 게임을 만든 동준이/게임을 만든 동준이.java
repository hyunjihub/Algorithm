import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int cases = Integer.parseInt(br.readLine());

        ArrayList<Integer> scores = new ArrayList<>();
        for(int i=0; i<cases; i++) {
            scores.add(Integer.parseInt(br.readLine()));
        }

        int last = scores.get(cases-1);
        int count = 0;
        for(int i=cases-2; i>=0; i--) {
            if(last>scores.get(i)) {
                last = scores.get(i);
                continue;
            }
            while(last<=scores.get(i)) {
                scores.set(i, scores.get(i)-1);
                count++;
            }
            last = scores.get(i);
        }
        System.out.print(count);
    } 
}
