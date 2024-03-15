import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;

public class Main {
    
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] input = br.readLine().split(" ");
        int future = Integer.parseInt(input[0]);
        int current = Integer.parseInt(input[1]);
        int digit = Integer.parseInt(br.readLine());
        int[] numbers = new int[digit];
        int decimal = 0;
        input = br.readLine().split(" ");
        for(int i=0; i<digit; i++) {
            numbers[i] = Integer.parseInt(input[i]);

            decimal += (numbers[i]*(int)Math.pow(future, digit-i-1));
        }

        ArrayList<Integer> answer = new ArrayList<>();
        while(true) {
            if(decimal==0) {
                break;
            }
            answer.add(decimal%current);
            decimal = decimal/current;
        }

        Collections.reverse(answer);
        for(int i=0; i<answer.size(); i++) {
            System.out.print(answer.get(i) + " ");
        }
    }   
}
