import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
        public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String input = br.readLine();
        String keyword = br.readLine();
        
        StringBuffer input_word = new StringBuffer(" "); 
        for(int i=0; i<input.length(); i++) {
            if(!(input.charAt(i)<65)) {
                input_word.append(input.charAt(i));
            }
        }

        String word = input_word.toString();
        if(word.contains(keyword)) {
            System.out.print(1);
        } else {
            System.out.print(0);
        }
    }
}
