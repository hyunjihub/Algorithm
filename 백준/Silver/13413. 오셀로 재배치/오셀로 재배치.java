import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int cases = Integer.parseInt(br.readLine());

        int N;
        String input1, input2;
        ArrayList<Integer> index = new ArrayList<>();
        ArrayList<Character> current = new ArrayList<>();
        ArrayList<Character> goal = new ArrayList<>();

        for(int i=0; i<cases; i++) {
            current.clear();;
            goal.clear();
            index.clear();

            N = Integer.parseInt(br.readLine());

            input1 = br.readLine();
            input2 = br.readLine();
            for(int j=0; j<N; j++) {
                current.add(input1.charAt(j));
                goal.add(input2.charAt(j));
                if(input1.charAt(j) != input2.charAt(j)) {
                    index.add(j);
                }
            }

            int W = 0;
            int B = 0;
            for(int j=0; j<index.size(); j++) {
                if(current.get(index.get(j))=='W') {
                    W++;
                } else {
                    B++;
                }
            }

            if(W>=B) {
                System.out.println(W);
            } else {
                System.out.println(B);
            }
        }
    }
}
