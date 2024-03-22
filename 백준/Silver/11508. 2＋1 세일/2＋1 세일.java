import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;

public class Main {
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        ArrayList<Integer> price = new ArrayList<>();
        for(int i=0; i<N; i++) {
            price.add(Integer.parseInt(br.readLine()));
        }

        Collections.sort(price);
        Collections.reverse(price);
        int sum = 0;
        for(int i=0; i<price.size(); i++) {
            if(i%3==2) continue;
            sum += price.get(i);
        }

        System.out.print(sum);
    } 
}
