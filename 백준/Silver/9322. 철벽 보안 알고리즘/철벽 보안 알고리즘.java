import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

public class Main {
    
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int cases = Integer.parseInt(br.readLine());

        int length;
        String [] input;
        int index = 0;
        for(int i=0; i<cases; i++) {
            length = Integer.parseInt(br.readLine());
            index = 0;
            input = br.readLine().split(" ");
            List<String> public_key1 = Arrays.asList(input);

            input = br.readLine().split(" ");
            List<String> public_key2 = Arrays.asList(input);
            List<Integer> order = new ArrayList<>();
            for(int j=0; j<length; j++) {
                order.add(public_key1.indexOf(public_key2.get(j)));
            }

            input = br.readLine().split(" ");
            while(true) {
                if(index==length) break;
                System.out.print(input[order.indexOf(index)] + " ");
                index++;
            }
            System.out.println();
        }

    }
}
