import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
        public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] line = new String[5];
        int max = 0;
        for(int i=0; i<5; i++) {
            line[i] = br.readLine();
            if(max<line[i].length()) {
                max= line[i].length();
            }
        }

        String answer = "";
        for(int i=0; i<max; i++) {
            for(int j=0; j<5; j++) {
                if(line[j].length()>i) {
                    answer += line[j].charAt(i);
                }
            }
        }

        System.out.println(answer);

    }
}
