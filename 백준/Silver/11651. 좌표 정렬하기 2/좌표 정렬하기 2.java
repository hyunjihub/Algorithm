import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int number = Integer.parseInt(br.readLine());

        String[] input;
        int[][] coordinate = new int[number][2];
        for(int i=0; i<number; i++) {
            input = br.readLine().split(" ");
            coordinate[i][0] = Integer.parseInt(input[0]);
            coordinate[i][1] = Integer.parseInt(input[1]);
        }

        Arrays.sort(coordinate, (o1, o2) -> {
            if(o1[1]-o2[1]==0) {
                return o1[0]-o2[0];
            } else {
                return o1[1]-o2[1];
            }
        });

        for(int i=0; i<number; i++) {
            for(int j=0; j<2; j++) {
                System.out.print(coordinate[i][j] + " ");
            }
            System.out.println();
        }
    }   
}
