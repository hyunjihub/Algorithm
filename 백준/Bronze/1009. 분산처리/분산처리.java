import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int number = Integer.parseInt(br.readLine());
        String[] string;

        for(int i=0; i<number; i++) {
            string = br.readLine().split(" ");
            int a = Integer.parseInt(string[0]);
            int b = Integer.parseInt(string[1]);
            int computer = 1;
            for(int j=0; j<b; j++) {
                computer = (computer * a) % 10;
            }
            if(computer==0) {
                computer=10;
            }
            System.out.println(computer);
        }
    }
}
