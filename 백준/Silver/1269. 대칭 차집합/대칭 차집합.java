import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

public class Main {
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] input = br.readLine().split(" ");

        int A = Integer.parseInt(input[0]);
        int B = Integer.parseInt(input[1]);

        String[] setA = br.readLine().split(" ");
        String[] setB = br.readLine().split(" ");

        List<String> array = new ArrayList<>(Arrays.asList(setA));
        array.addAll(Arrays.asList(setB));

        HashSet<String> set = new HashSet<>(array);

        System.out.print(set.size()-A+set.size()-B);
        
    }  
}
