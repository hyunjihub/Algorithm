import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] input = br.readLine().split(" ");

        int R = Integer.parseInt(input[0]);
        int C = Integer.parseInt(input[1]);
        int W = Integer.parseInt(input[2]);

        int[][] pascal = new int[R+W][R+W];
        pascal[1][1] = 1;
        pascal[2][1] = 1;
        pascal[2][2] = 1;
        int sum = 0;
        int line = 0;
        for(int i=1; i<=R+W-1; i++) {
            for(int j=1; j<=i; j++) {
                if(i>=3) {
                    if(j==1 && j==i) {
                        pascal[i][j] = 1;
                    } else {
                        pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j];
                    }
                }
                
                if(i>=R) {
                    if(j>=C && j<=C+line) {
                        sum += pascal[i][j];
                    }
                }
            }
            if(i>=R) {
                line++;
            }
        }

        System.out.print(sum);
        
    }
}
