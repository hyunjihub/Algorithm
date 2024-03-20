import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;

public class Main {
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        HashSet<String> rainbow = new HashSet<>();
        rainbow.add("ChongChong");
        String[] input;
        for(int i=0; i<N; i++) {
            input = br.readLine().split(" ");
            if(rainbow.contains(input[0]) || rainbow.contains(input[1])) {
                rainbow.add(input[0]);
                rainbow.add(input[1]);
            }
        }
        System.out.print(rainbow.size());
    } 
}
