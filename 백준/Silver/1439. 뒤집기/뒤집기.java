import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String input = br.readLine();

        int one = 0;
        int zero = 0;
        for(int i=0; i<input.length(); i++) {
            if(input.charAt(i)=='1') {
                while(hasNext(input, i, '1')) {
                    i++;
                }
                one++;
            } else {
                while(hasNext(input, i, '0')) {
                    i++;
                }
                zero++;
            }
        }

        if(one>=zero) {
            System.out.print(zero);
        } else {
            System.out.print(one);
        }
        
    }
    
    public static boolean hasNext(String s, int index, char c) {
        if(s.length()-1==index) {
            return false;
        } else {
            if(s.charAt(index+1)==c) {
                return true;
            } else {
                return false;
            }
        }
    }
}
