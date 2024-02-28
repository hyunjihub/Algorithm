import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    
        public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int[][] subway = new int[10][2];

        for(int i=0; i<10; i++) {
            String[] input = br.readLine().split(" ");
            subway[i][0] = Integer.parseInt(input[0]);
            subway[i][1] = Integer.parseInt(input[1]);
        }

        int people = 0;
        int max = 0;
        for (int i=0; i<10; i++) {
            people = people-subway[i][0];
            people = people+subway[i][1];
            if(max<people) {
                max=people;
            }
        }

        System.out.print(max);
    }   
}

