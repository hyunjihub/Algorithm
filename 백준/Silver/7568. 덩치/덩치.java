import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    
        public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int people = Integer.parseInt(br.readLine());

        String[] input;
        int[][] build = new int[people][2];
        for(int i=0; i<people; i++) {
            input = br.readLine().split(" ");
            build[i][0] = Integer.parseInt(input[0]);
            build[i][1] = Integer.parseInt(input[1]);
        }

        int grade = 1;
        int[] grades = new int[people];
        for(int i=0; i<people; i++) {
            grade = 1;
            for(int j=0; j<people; j++) {
                if(i==j) continue;
                if(build[i][0]< build[j][0] && build[i][1]<build[j][1]) {
                    grade++;
                }
            }
            grades[i] = grade;
        }

        for(int i=0; i<people; i++) {
            System.out.print(grades[i] + " ");
        }
    }   
}
