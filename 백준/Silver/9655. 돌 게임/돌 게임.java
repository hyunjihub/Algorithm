import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
        public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int input = Integer.parseInt(br.readLine());

        if(input%2==0) {
            System.out.print("CY");
        } else if (input%2==1) {
            System.out.print("SK");
        }
    }   
}
