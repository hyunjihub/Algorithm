import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
        public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n_case = Integer.parseInt(br.readLine());

        int num = 0;
        int index = 0;
        for(int i=0; i<n_case; i++) {
            index = 0;
            num = Integer.parseInt(br.readLine());
            if(num==1) {
                System.out.println("0");
            } else {
                while(true) {
                    if(num%2==1) {
                        System.out.print(index + " ");
                    }
                    num = num/2;
                    if(num==1) {
                        System.out.println(index+1);
                        break;
                    }
                    else {
                        index++;
                    }
                }
            }
        }   
    }
}
