import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
        public static void main(String[] args) throws IOException {
    
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int number = Integer.parseInt(br.readLine());

        String[] input;
        int[] array = new int[10];
        for(int i=0; i<number; i++) {
            input = br.readLine().split(" ");

            for(int j=0; j<10; j++) {
                array[j] = Integer.parseInt(input[j]);
            }

            Arrays.sort(array);
            System.out.println(array[7]);
        }
    }
}
