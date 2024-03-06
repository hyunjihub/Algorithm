import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int input = Integer.parseInt(br.readLine());

        boolean isConstructor = false;
        String number = "";
        int number_length;
        int sum;
        for(int i=0; i<=input; i++) {
            sum = i;
            number = Integer.toString(i);
            number_length = number.length();
            for (int j=0; j<number_length; j++) {
                sum += (number.charAt(j)-'0');
            }
            if(input==sum) {
                isConstructor = true;
                break;
            }
        }

        if(isConstructor) {
            System.out.println(number);
        } else {
            System.out.println(0);
        }
    }
}
