import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
        public static void main(String[] args) throws IOException {

        String[] color = {"black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"};
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int[] number = new int[3];
        for(int i=0; i<3; i++) {
            String input = br.readLine();
            for(int j=0; j<color.length; j++) {
                if(color[j].equals(input)) {
                    number[i]=j;
                }
            }
        }

        String answer = "";
        if(number[0]!=0) {
            answer = Integer.toString(number[0]) + Integer.toString(number[1]);
        } else {
            answer = Integer.toString(number[1]);
        }
        
        if(!answer.equals("0")) {
            for(int i=0; i<number[2]; i++) {
                answer += "0";
            }
        }
        System.out.print(answer);
    }   
}
