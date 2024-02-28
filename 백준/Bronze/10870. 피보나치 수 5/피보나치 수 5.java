import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int input = Integer.parseInt(br.readLine());
        
        if(input==0 || input==1) {
            System.out.print(input);
        } else {
            int answer = fibonacci(input-1)+fibonacci(input-2);
            System.out.print(answer);
        }
    }
    
    public static int fibonacci(int num) {
        if(num<=1) return num;
        else return fibonacci(num-1)+fibonacci(num-2);
    }
}
