import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int number = Integer.parseInt(br.readLine());

        char[] first_name = new char[number];
        for(int i=0; i<number; i++) {
            first_name[i] = br.readLine().charAt(0);
        }

        Arrays.sort(first_name);
        char check = first_name[0];
        int count= 0;
        int index = 0;
        String answer = "";
        while(true) {
            if(index>=number) break;

            if(check!=first_name[index]) {
                check = first_name[index];
                count = 1;
            } else {
                count = count + 1;
                if(count==5) {
                    answer += first_name[index];
                }
            }
            index++;
        }

        if (answer.equals("")) {
            System.out.print("PREDAJA");
        } else {
            System.out.print(answer);
        }

    }   
}
