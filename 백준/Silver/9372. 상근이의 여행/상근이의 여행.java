import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int cases = Integer.parseInt(br.readLine());
        
        String[] input;
        int nation, airplane;
        for(int i=0; i<cases; i++) {
            input = br.readLine().split(" ");
            nation = Integer.parseInt(input[0]);
            airplane = Integer.parseInt(input[1]);

            int[][] way = new int[airplane][2];
            for(int j=0; j<airplane; j++) {
                input = br.readLine().split(" ");
                way[j][0] = Integer.parseInt(input[0]);
                way[j][1] = Integer.parseInt(input[1]);
            }

            System.out.println(nation-1);
        }
    }
}
