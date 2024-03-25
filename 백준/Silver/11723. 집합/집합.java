import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());

        boolean[] isContain = new boolean[20];
        Arrays.fill(isContain, false);
        StringBuilder answer = new StringBuilder();

        int number = 0;
        for (int i = 0; i < N; i++) {
            String[] input = br.readLine().split(" ");
            if (input.length != 1) {
                number = Integer.parseInt(input[1]);
            }
            switch (input[0]) {
                case "add":
                    isContain[number - 1] = true;
                    break;
                case "remove":
                    isContain[number - 1] = false;
                    break;
                case "check":
                    answer.append(isContain[number - 1] ? "1\n" : "0\n");
                    break;
                case "toggle":
                    isContain[number - 1] = !isContain[number - 1];
                    break;
                case "all":
                    Arrays.fill(isContain, true);
                    break;
                case "empty":
                    Arrays.fill(isContain, false);
                    break;
            }
        }
        bw.write(answer.toString());
        bw.flush();
        bw.close();
        br.close();
    }
}