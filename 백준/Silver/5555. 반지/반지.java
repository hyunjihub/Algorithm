import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String finding = br.readLine();

        int N = Integer.parseInt(br.readLine());
        String[] strings = new String[N];
        for(int i=0; i<N; i++) {
            strings[i] = br.readLine();
            strings[i] += strings[i];
        }

        int count = 0;
        for(int i=0; i<N; i++) {
            if(strings[i].contains(finding)) {
                count++;
            }
        }
        System.out.print(count);
    }   
}
