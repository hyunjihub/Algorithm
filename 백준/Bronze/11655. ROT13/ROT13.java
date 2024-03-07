import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String input = br.readLine();
        
        char word;
        for(int i=0; i<input.length(); i++) {
            word = input.charAt(i);

            if(word<65) {
                System.out.print((char)word);
            } else {
                if(word<=90) {
                    word = (char)(word+13);
                    if(word>90) {
                        word = (char)(64+word-90);
                    }
                    System.out.print((char)word);
                } else {
                    word = (char)(word+13);
                    if(word>122) {
                        word = (char)(96+word-122);
                    }
                    System.out.print((char)word);
                }
            }
            
        }
    }
}
