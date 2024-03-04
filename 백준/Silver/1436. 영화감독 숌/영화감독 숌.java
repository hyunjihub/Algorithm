import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.String;

public class Main {
    
        public static void main(String[] args) throws IOException {
    
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int input = Integer.parseInt(br.readLine());

        int count = 0;
        int number = 666;
        while(true) {
            if(count>=input) break;

            if(Integer.toString(number).contains("666")) {
                count++;
            }
            number++;
        }
        System.out.print(number-1);
    }
}
